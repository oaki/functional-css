const spacing = {
  none: 0,
  "x-small": ".6rem",
  small: "1.2rem",
  medium: "2.4rem",
  large: "3.6rem",
  "x-large": "5.4rem",
  "xx-large": "7.2rem",
  "xxx-large": "10.8rem",
};

const config = [
  {
    description: "Timing",
    values: {
      time: {
        base: ".45s",
        short: ".25s",
      },
    },
  },
  {
    description: "Sizing variables",
    values: {
      spacing,
      margin: spacing,
      padding: spacing,
    },
  },
  {
    description: "Typography variables",
    values: {
      "font-weight": {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      "font-size": {
        h1: "3.6rem",
        h2: "3.2rem",
        h3: "2.4rem",
        h4: "1.8rem",
        base: "1.6rem",
        h5: "1.5rem",
        h6: "1.4rem",
        sm: "1.2rem",
        xs: "1rem",
      },
      "line-height": {
        large: 1.75,
        base: 1.5,
        small: 1.25,
      },
    },
  },
  {
    description: "Border radius variables",
    values: {
      "border-radius": {
        base: ".4rem",
      },
    },
  },
  {
    description: [
      "Media Variables"
    ],
    values: {
      breakpoints: {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200
      },
    },
  },
  {
    description: "Wrapper max-widths",
    values: {
      "wrapper-width": {
        max: "120rem",
        md: "100rem",
        sm: "83rem",
        xs: "77rem",
      },
    },
  },
  {
    description: "Color names based on http://chir.ag/projects/name-that-color",
    values: {
      "color-deep-cerulean": "#0078b4",
      "color-chambray": "#335c85",
      "color-waikawa-gray": "#5b799b",
      "color-casper": "#aabacc",
      "color-red": "#ea0000",
      "color-flush-orange": "#ff7900",
      "color-orange-peel": "#ffa200",
      "color-pale-sky": "#6b7783",
    },
  },
];

module.exports = {
  config,
};
