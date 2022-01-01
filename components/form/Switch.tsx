//UTILS
import { useRef } from 'react'
import { darkTheme } from '../../styles/stitches.config'

//ACCESSIBILITY
import { useFocusRing } from '@react-aria/focus'
import { useSwitch } from '@react-aria/switch'
import { VisuallyHidden } from '@react-aria/visually-hidden'

//COMPONENTS
import { Any } from '../layout/Any'
import { ToggleLabel } from './CheckBox'

export function Switch(props: React.ComponentProps<any>) {
  const { state, size = 2 } = props
  const ref = useRef(null)
  const { inputProps } = useSwitch(props, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <ToggleLabel>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <Any
        as="svg"
        width={40 * size}
        height={24 * size}
        aria-hidden="true"
        css={{
          mr: 4,
        }}
      >
        <Any
          as="rect"
          x={4 * size}
          y={4 * size}
          width={32 * size}
          height={16 * size}
          rx={8 * size}
          css={{
            fill: '$primary',
            stroke: '$dark',
            [`.${darkTheme} &`]: {
              stroke: '$light',
            },
          }}
        />
        <Any
          as="circle"
          cx={state.isSelected ? 28 * size : 12 * size}
          cy={12 * size}
          r={5 * size}
          css={{ fill: '$light' }}
        />
        {isFocusVisible && (
          <Any
            as="rect"
            x={4 * size}
            y={4 * size}
            width={32 * size}
            height={16 * size}
            rx={8 * size}
            fill="none"
            css={{
              strokeWidth: '$sizes$2',
              stroke: '$focusRing',
            }}
          />
        )}
      </Any>
      {props.children}
    </ToggleLabel>
  )
}
