import * as Stitches from '@stitches/react'
import { scales } from './scales'

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
      dark: '#162127',
      light: '#E5ECF1',
      grey: '#B1C6D3',

      blue: '#6892AA',
      darkBlue: '#41607D',
      lightBlue: '#A4BECD',

      success: '#AFC97E',
      warning: '#DE6C83',
      error: '#EB5E55',
      info: '$blue',

      lightning: '#EEF36A',
      bitcoin: '#FF9900',

      primary: '$darkBlue',
      secondary: '$blue',
      tertiary: '$lightBlue',
      text: '$dark',
      altText: '$light',
      muted: '$grey',
      background: '$light',
      link: '$blue',
      border: '$grey',

      hiContrast: '$dark',
      loContrast: '$light',

      focusRing: '$dark',

      canvasText: '$dark',
      canvas: '$light',

      shadow: 'hsl(210deg 38% 21% / 0.34)',

      //I am not positive if the colors defined below are necessary or not
      //Todo: define panel color and set different one for darkMode to be used for the backgound on cards?
      panel: 'white',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      clear: 'hsla(0, 0%, 0%, 0)',
    },
    space: scales,
    sizes: scales,
    radii: {
      none: '0',
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    shadows: {
      1: `0.3px 0.5px 0.7px $colors$shadow,
        0.8px 1.6px 2px -0.8px $colors$shadow`,
      2: `0.3px 0.5px 0.7px $colors$shadow,
        0.8px 1.6px 2px -0.8px $colors$shadow,
        2.1px 3.1px 4.2px -1.7px $colors$shadow,
        2.8px 3.4px 3.6px -2.5px $colors$shadow`,
      3: `0.3px 0.5px 0.7px $colors$shadow,
        1.5px 2.9px 3.7px -0.4px $colors$shadow,
        2.7px 5.4px 6.8px -0.7px $colors$shadow,
        4.5px 8.9px 11.2px -1.1px $colors$shadow,
        7.1px 14.3px 18px -1.4px $colors$shadow,
        11.2px 22.3px 28.1px -1.8px $colors$shadow,
        17px 33.9px 42.7px -2.1px $colors$shadow,
        25px 50px 62.9px -2.5px $colors$shadow`,
      inner$1: 'inset $shadows$1',
      inner$2: 'inset $shadows$2',
      inner$3: 'inset $shadows$3',
      none: 'none',
    },
    fonts: {
      untitled:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      monospace: 'Menlo, monospace',
    },
    fontSizes: {
      0: '0.75rem',
      1: '0.875rem',
      2: '1rem',
      3: '1.125rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '1.875rem',
      7: '2.25rem',
      8: '3rem',
      9: '3.75rem',
      10: '4.5rem',
      11: '6rem',
      12: '8rem',
    },
    lineHeights: {
      1: '1em',
      2: '1.25em',
      3: '1.5em',
      4: '1.75em',
      5: '1.75em',
      6: '2em',
      7: '2.25em',
      8: '2.5em',
      9: '1',
      10: '1',
      11: '1',
      12: '1',
      13: '1',
    },
    fontWeights: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    borderWidths: {},
    borderStyles: {},
    transitions: {},
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    textSize: (value: Stitches.ScaleValue<'space'> | number | string) => ({
      fontSize: value,
      lineHeight: value,
    }),
    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),

    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),

    linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    transparentBackground: (value: number) => ({
      bc: `rgba(0, 0, 0, ${value >= 0 || value <= 1 ? value : '0%'})`,
    }),
  },
})

export const darkTheme = createTheme('dark', {
  colors: {
    text: '$light',
    altText: '$dark',
    background: '$dark',
    shadow: 'hsl(202deg 26% 31% / 0.34)',
    focusRing: '$light',
  },
})
