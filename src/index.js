const ntc = require("../vendor/ntc");
const fs = require("fs");

const rules = require("./rules");

function prepareCss(obj) {
  console.log({obj});
  const propertyName = obj.name; // display
  const properties = obj.values;

  const result = [];
  properties.forEach((property) => {
    console.log({property});
    let selector = "";
    if (typeof property.className !== "undefined") {
      selector = property.className;
    } else if (typeof property.postfix !== "undefined") {
      selector = `${getFirstLetters(propertyName)}-${property.postfix}`;
    } else {
      if (propertyName === "color") {
        const colorArr = ntc.name(property);
        const colorName = colorArr[1].replace(/\s+/g, "-").toLowerCase();

        selector = `${getFirstLetters(propertyName)}-${colorName}`;
      } else {
        selector = `${getFirstLetters(propertyName)}-${getFirstLetters(property)}`;
      }
    }

    const propertyValue = typeof property.value !== "undefined" ? property.value : property;
    result.push({
      selector,
      declaration: `${propertyName}: ${propertyValue}`
    });

    if (obj.breakpoints) {
      Object.keys(obj.breakpoints).forEach((breakpointName) => {
        console.log({breakpointName});
        result.push({
          selector: `${breakpointName}-${selector}`,
          declaration: `${propertyName}: ${propertyValue}`,
          mediaQueryMinQuery: obj.breakpoints[breakpointName]
        });
      });
    }
  });

  return result;
}

function getFirstLetters(str) {
  const words = `${str}`.split(/-| /);
  return words.map(getFromDictionary).join("");
}

const dict = {
  none: "none"
};

function getFromDictionary(word) {
  if (dict[word]) {
    return dict[word];
  }
  return word[0];
}

function getMediaQueryTemplateStart(minWidth) {
  if (!minWidth) {
    return "";
  }
  return `@media screen and (min-width: ${minWidth}px){`;
}


function getMediaQueryTemplateEnd(minWidth) {
  if (!minWidth) {
    return "";
  }
  return `}`;
}

const getRuleTemplate = (prefix = "") => (props) => `
${getMediaQueryTemplateStart(props.mediaQueryMinQuery)}
.${prefix}${props.selector}{ 
  ${props.declaration}; 
}
${getMediaQueryTemplateEnd(props.mediaQueryMinQuery)}
`;

function useMediaQueryTemplate(minWidth, str) {
  return `@media screen and (min-width: ${minWidth}px){${str}}`;
}

// do flat array
const classes = rules.map(prepareCss).reduce((a, b) => [...a, ...b], []);
const result = classes.map(getRuleTemplate("")).join("");

fs.writeFileSync("./dist/functional-css.css", result);
