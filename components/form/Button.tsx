//UTILS
import { useRef } from 'react'
import { darkTheme, styled } from '../../styles/stitches.config'
import { useButton } from '@react-aria/button'

export const BaseButton = styled('button', {
  borderWidth: '$sizes$1',
  borderStyle: 'solid',
  borderColor: '$dark',
  boxShadow: '$2',
  cursor: 'pointer',

  '&:focus-visible': {
    outlineColor: '$focusRing',
    outlineWidth: '$sizes$2',
    outlineStyle: 'solid',
  },
  '&:hover': {
    boxShadow: '$1',
  },
  '&:active': {
    transform: 'translateY(3px)',
  },
  [`.${darkTheme} &`]: {
    borderColor: '$light',
  },
  variants: {
    filled: {
      default: {
        '&:focus-visible': {
          outlineColor: '$secondary',
          outlineWidth: '$sizes$2',
          outlineStyle: 'solid',
          [`.${darkTheme} &`]: {
            outlineColor: '$focusRing',
          },
        },
        color: '$light',
        bc: '$dark',
      },
      primary: {
        color: '$light',
        bc: '$primary',
      },
      secondary: {
        color: '$light',
        bc: '$secondary',
      },
      tertiary: {
        color: '$dark',
        bc: '$tertiary',
      },
      transparent: {
        transparentBackground: 0,
        color: '$dark',
        [`.${darkTheme} &`]: {
          color: '$light',
        },
      },
      success: {
        color: '$dark',
        bc: '$success',
        border: 'none',
      },
    },
    size: {
      sm: {
        fontSize: '$3',
        p: '$2 $3',
        '@bp2': {
          fontSize: '$4',
          p: '$3 $4',
        },
      },
      md: {
        fontSize: '$4',
        p: '$4 $5',
        '@bp2': {
          fontSize: '$5',
          p: '$5 $6',
        },
      },
    },
    borderRadius: {
      normal: {
        borderRadius: '$2',
      },
      round: {
        borderRadius: '$round',
      },
    },
  },
  defaultVariants: {
    filled: 'default',
    borderRadius: 'normal',
    size: 'md',
  },
})

export function Button(props: React.ComponentProps<any>) {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <BaseButton {...props} {...buttonProps} disabled={props.disabled} ref={ref}>
      {props.children}
    </BaseButton>
  )
}
