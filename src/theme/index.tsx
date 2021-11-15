import type { Theme } from "theme-ui";

export const theme: Theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96, 128],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#162127",
    background: "#fff",
    primary: "#41607D",
    secondary: "#6892AA",
    muted: "#A4BECD",
    success: "#AFC97E",
    warning: "#DE6C83",
    error: "#EB5E55",
    info: "lightblue",
    lightning: "#EEF36A",
    bitcoin: "#FF9900",
    modes: {
      dark: {
        text: "#E5ECF1",
        background: "#162127",
        // primary: "#0cf",
        // secondary: "#90c",
        // muted: "#f6f6f6",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    success: { color: "success" },
    warning: { color: "warning" },
    error: { color: "error" },
    info: { color: "info" },
    bitcoin: { color: "bitcoin" },
    lightning: { color: "lightning" },
  },
  buttons: {
    icon: {
      fontSize: [9],
      color: "text",
      textDecoration: "none",
      cursor: "pointer",
      ":hover": {
        color: "primary",
        textDecoration: "underline",
      },
    },
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 4,
      bg: "muted",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      modes: {
        dark: {
          //Todo: Why is this not toggling on?
          background: "primary",
        },
      },
    },
    secondary: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  styles: {
    root: {
      //Todo: Styles assigned to root <html> element- some default to whatever the body is. I would prefer to set them here once we decide on them.
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "text",
      bg: "background",
      boxSizing: "border-box",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
};
