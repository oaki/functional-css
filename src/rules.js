const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200
};

const fontWeights = [
  {className: "fw-l", value: "300"},
  {className: "fw-r", value: "400"},
  {className: "fw-sb", value: "600"},
  {className: "fw-b", value: "700"},
];

const fontSizes = [
  {className: "fs-1", value: "3.6rem"},
  {className: "fs-2", value: "3.2rem"},
  {className: "fs-3", value: "2.4rem"},
  {className: "fs-4", value: "1.8rem"},
  {className: "fs-base", value: "1.6rem"},
  {className: "fs-5", value: "1.5rem"},
  {className: "fs-6", value: "1.4rem"},
  {className: "fs-sm", value: "1.2rem"},
  {className: "fs-xs", value: "1rem"},
];

const lineHeights = [
  {className: "lh-sm", value: "1.25"},
  {className: "lh-base", value: "1.5"},
  {className: "lh-large", value: "1.75"},
];

const spacings = [
  {postfix: "none", value: 0},
  {postfix: "xs", value: ".6rem"},
  {postfix: "sm", value: "1.2rem"},
  {postfix: "md", value: "2.4rem"},
  {postfix: "lg", value: "3.6rem"},
  {postfix: "xl", value: "5.4rem"},
  {postfix: "xxl", value: "7.2rem"},
  {postfix: "xxxl", value: "10.8rem"}
];

const colors = [
  "#00385f",
  "#00497b",
  "#005b94",
  "#0078b4",
  "#40a3d5",
  "#83d0f5",
  {className: "c-frankestain", value: "#83d0f1"}
];

const rules = [
  {
    name: "display",
    values: ["none", "block", "inline-block", "inline", "flex", "inline-flex", "table", "table-cell"],
    breakpoints
  },
  {
    name: "align-items",
    values: ["flex-start", "flex-end", "center", "baseline", "stretch"]
  },
  {
    name: "justify-content",
    values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]
  },
  {
    name: "align-content",
    values: ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"]
  },

  {
    name: "flex-direction",
    values: ["column", "row"]
  },

  {name: "padding", values: spacings, breakpoints},
  {name: "padding-top", values: spacings, breakpoints},
  {name: "padding-right", values: spacings, breakpoints},
  {name: "padding-bottom", values: spacings, breakpoints},
  {name: "padding-left", values: spacings, breakpoints},

  {name: "margin", values: [{className: "m-0-a", value: "0 auto"}]},
  {name: "margin", values: spacings, breakpoints},
  {name: "margin-top", values: spacings, breakpoints},
  {name: "margin-right", values: spacings, breakpoints},
  {name: "margin-bottom", values: spacings, breakpoints},
  {name: "margin-left", values: spacings, breakpoints},

  {
    name: "max-width",
    values: [
      {className: "w-max", value: "1200px"},
      {className: "w-full", value: "100%"},
    ],
  },
  {
    name: "z-index",
    values: [
      {className: "z-0", value: "0"},
      {className: "z-1", value: "1"},
      {className: "z-2", value: "2"},
      {className: "z-3", value: "3"},
      {className: "z-4", value: "4"},
      {className: "z-5", value: "5"},
      {className: "z-22", value: "22"},
      {className: "z-23", value: "23"},
      {className: "z-1000", value: "1000"},
      {className: "z-2000", value: "2000"},
    ]
  },
  {
    name: "height",
    values: [
      "auto",
      {className: "h-full", value: "100%"},
    ],
  },
  {
    name: "border-radius",
    values: [
      {className: "br-base", value: ".4rem"},
      {className: "br-a-50", value: "50%"},
    ],
  },

  {
    name: "font-weight",
    values: fontWeights, breakpoints
  },
  {
    name: "font-size",
    values: fontSizes, breakpoints
  },

  {
    name: "line-height",
    values: lineHeights
  },

  {
    name: "color", values: colors
  },

  {
    name: "overflow", values: ["hidden", "visible"]
  },
  {
    name: "overflow-y", values: ["auto", "visible"]
  },
  {
    name: "visibility", values: ["visible"]
  },

];

module.exports = rules;
