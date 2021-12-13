//UTILS
import { useRef } from 'react'
import { useSearchField } from '@react-aria/searchfield'
import { useSearchFieldState } from '@react-stately/searchfield'

//COMPONENTS
import { Box } from '../layout/Box'
import { BaseTextField, BaseTextFieldLabel } from './TextField'

export function SearchField(props: React.ComponentProps<any>) {
  let { label } = props
  let state = useSearchFieldState(props)
  let ref = useRef(null)
  let { labelProps, inputProps } = useSearchField(props, state, ref)

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        ...props.css,
      }}
    >
      <BaseTextFieldLabel {...labelProps}>{label}</BaseTextFieldLabel>
      <BaseTextField {...inputProps} ref={ref} />
    </Box>
  )
}
