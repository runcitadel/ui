//UTILS
import { useRef } from 'react'
import { useSearchField } from '@react-aria/searchfield'
import { useSearchFieldState } from '@react-stately/searchfield'

//COMPONENTS
import { Box } from '../layout/Box'
import { BaseTextField, BaseTextFieldLabel } from './TextField'

export function SearchField(props: React.ComponentProps<any>) {
  const { label } = props
  const state = useSearchFieldState(props)
  const ref = useRef(null)
  const { labelProps, inputProps } = useSearchField(props, state, ref)

  return (
    <Box
      css={{
        display: 'flex',
        fd: 'column',
        width: '100%',
        ...props.css,
      }}
    >
      <BaseTextFieldLabel {...labelProps}>{label}</BaseTextFieldLabel>
      <BaseTextField {...inputProps} ref={ref} />
    </Box>
  )
}
