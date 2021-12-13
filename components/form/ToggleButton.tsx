//UTILS
import { useRef } from 'react'
import { useToggleButton } from '@react-aria/button'
import { useToggleState } from '@react-stately/toggle'

//COMPONENTS
import { Button } from './Button'

export const ToggleButton = (props: React.ComponentProps<any>) => {
  const ref = useRef(null)
  const state = useToggleState(props)
  //Todo: add pressed/active styles with isPressed
  const { buttonProps, isPressed } = useToggleButton(
    { ...props, elementType: Button },
    state,
    ref
  )

  return (
    <Button
      ref={ref}
      {...buttonProps}
      css={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {props.children}
    </Button>
  )
}
