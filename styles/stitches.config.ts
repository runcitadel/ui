import * as Stitches from "@stitches/react";
import { scales } from "./scales";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = Stitches.createStitches({
  theme: {
    colors: {
      dark: "#162127",
      light: "#E5ECF1",
      grey: "#B1C6D3",

      blue: "#6892AA",
      darkBlue: "#41607D",
      lightBlue: "#A4BECD",

      success: "#AFC97E",
      warning: "#DE6C83",
      error: "#EB5E55",
      info: "$blue",

      lightning: "#EEF36A",
      bitcoin: "#FF9900",

      primary: "$darkBlue",
      secondary: "$blue",
      tertiary: "$lightBlue",
      text: "$dark",
      altText: "$light",
      muted: "$grey",
      background: "$light",
      link: "$blue",
      border: "$grey",

      hiContrast: "$dark",
      loContrast: "$light",

      //I am not positive that all of the colors defined below are being used
      //But please don't delete this one, anyways! The focus ring is ess
      focusRingColor: "$light",

      canvas: "hsl(0 0% 93%)",
      panel: "white",
      clear: "hsla(0, 0%, 0%, 0)",
      transparentPanel: "hsl(0 0% 0% / 97%)",
      shadowLight: "210deg 38% 21%",
      shadowDark: "202deg 26% 31%",
    },
    space: scales,
    sizes: scales,
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
    boxShadows: {
      1: `0.3px 0.5px 0.7px hsl($shadowLight / 0.34),
        0.4px 0.8px 1px -1.2px hsl($shadowLight / 0.34),
        1px 2px 2.5px -2.5px hsl($shadowLight / 0.34)`,
      2: `0.3px 0.5px 0.7px hsl($shadowLight / 0.36),
        0.8px 1.6px 2px -0.8px hsl($shadowLight / 0.36),
        2.1px 4.1px 5.2px -1.7px hsl($shadowLight / 0.36),
        5px 10px 12.6px -2.5px hsl($shadowLight / 0.36)`,
      3: `0.3px 0.5px 0.7px hsl($shadowLight / 0.34),
        1.5px 2.9px 3.7px -0.4px hsl($shadowLight / 0.34),
        2.7px 5.4px 6.8px -0.7px hsl($shadowLight / 0.34),
        4.5px 8.9px 11.2px -1.1px hsl($shadowLight / 0.34),
        7.1px 14.3px 18px -1.4px hsl($shadowLight / 0.34),
        11.2px 22.3px 28.1px -1.8px hsl($shadowLight / 0.34),
        17px 33.9px 42.7px -2.1px hsl($shadowLight / 0.34),
        25px 50px 62.9px -2.5px hsl($shadowLight / 0.34)`,
      // inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      // popper: `0 0 1px $colors$borderStill, $shadows$lg`,
      // base: "$1",
      // "base:hover": "$2, $2",
      // none: "none",
    },
    fonts: {
      untitled:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      monospace: "Menlo, monospace",
    },
    fontSizes: {
      1: "11.16px",
      2: "12.50px",
      3: "14.00px",
      4: "15.68px",
      5: "17.56px",
      6: "22.03px",
      7: "27.63px",
      8: "30.95px",
      9: "38.82px",
      10: "48.70px",
      11: "61.09px",
      12: "85.83px",
      13: "107.66px",
      base: "$md",
    },
    lineHeights: {
      1: "1em",
      2: "1.25em",
      3: "1.5em",
      4: "1.75em",
      5: "1.75em",
      6: "2em",
      7: "2.25em",
      8: "2.5em",
      9: "1",
      10: "1",
      11: "1",
      12: "1",
      13: "1",
      base: "$md",
    },
    fontWeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    transitions: {},
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    textSize: (value: Stitches.ScaleValue<"space"> | number | string) => ({
      fontSize: value,
      lineHeight: value,
    }),
    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),

    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),

    linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    transparent: (value: number) => ({
      backgroundColor: `rgba(0, 0, 0, ${
        value >= 0 || value <= 1 ? value : "0%"
      })`,
    }),
  },
});

//Todo: Pick out what we should use as variants

export const darkTheme = createTheme("dark", {
  //   ...globalCss,
  //   ...css,
  //   ...getCssText,
  //   ...config,
  colors: {
    // ...theme.colors,
    text: "$light",
    altText: "$dark",
    background: "$dark",
  },
});
