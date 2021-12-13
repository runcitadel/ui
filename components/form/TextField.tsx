//UTILS
import { InputHTMLAttributes, useRef } from 'react'
import { useTextField } from '@react-aria/textfield'
import { styled } from '../../styles/stitches.config'

//COMPONENTS
import { Box } from '../layout/Box'
import { Flex } from '../layout/Flex'
import { VisuallyHidden } from '@react-aria/visually-hidden'

export const BaseTextField = styled('input', {
  textAlign: 'center',
  br: '$2',
  boxShadow: '$2',
  fontSize: '$4',
  p: '$4 $5',
  '@bp2': {
    fontSize: '$5',
    padding: '$5 $6',
  },
  '&:focus-visible': {
    outlineColor: '$focusRing',
    outlineWidth: '$sizes$2',
    outlineStyle: 'solid',
  },
  '&:disabled': {
    backgroundColor: '$dark',
    color: '$light',
  },
  variants: {
    state: {
      error: {
        border: '2px solid $error',
        '&:focus-visible': {
          outlineColor: '$error',
          outlineWidth: '$sizes$1',
          outlineStyle: 'solid',
        },
      },
    },
  },
})

export const BaseTextFieldLabel = styled('label', {
  textAlign: 'left',
  fontSize: '$6',
  mb: '$1',
  '@bp2': {
    fontSize: '$7',
    mb: '$2',
  },
})

export function TextField(props: React.ComponentProps<any>) {
  let {
    disabled = false,
    required = false,
    invalid = false,
    showErrors = true,
    centerLabel = false,
    label,
  } = props

  //Perform default validations
  const propsCopy = { ...props }
  if (required && props.value === '') {
    propsCopy.invalid = true
    propsCopy.errorMessage = `Required`
  } else if (props.type === 'password' && props.newPassword) {
    if (!/[a-z]/.test(props.value)) {
      propsCopy.invalid = true
      propsCopy.errorMessage = `At least one lowercase letter required`
    } else if (!/[A-Z]/.test(props.value)) {
      propsCopy.invalid = true
      propsCopy.errorMessage = `At least one uppercase letter required`
    } else if (!/[1-9]/.test(props.value)) {
      propsCopy.invalid = true
      propsCopy.errorMessage = `At least one number required`
    } else if (!/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/@#]/.test(props.value)) {
      propsCopy.invalid = true
      propsCopy.errorMessage = `At least one symbol required`
    } else if (props.value.length < 8) {
      propsCopy.invalid = true
      propsCopy.errorMessage = `At least eight characters required`
    }
  }

  let ref = useRef(null)
  let { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    propsCopy,
    ref
  )

  return (
    <Flex css={{ flexDirection: 'column', width: '100%' }}>
      <Flex css={{ jc: centerLabel ? 'center' : 'space-between', ai: 'center' }}>
        <BaseTextFieldLabel {...labelProps}>{label}</BaseTextFieldLabel>
        {showErrors && propsCopy.errorMessage ? (
          <Box
            {...errorMessageProps}
            css={{ color: '$error', fontSize: '$4', textAlign: 'right' }}
          >
            {propsCopy.errorMessage}
          </Box>
        ) : (
          <VisuallyHidden>
            <Box
              {...errorMessageProps}
              css={{ color: '$error', fontSize: '$4', textAlign: 'right' }}
            >
              {propsCopy.errorMessage}
            </Box>
          </VisuallyHidden>
        )}
      </Flex>
      <BaseTextField
        ref={ref}
        state={propsCopy.errorMessage ? 'error' : undefined}
        {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
        //For some reason react-aria's useTextField hook is not passing the props below to the input so here we manually override that
        {...{
          ['aria-required']: required,
          ['aria-invalid']: invalid,
          ['aria-disabled']: disabled,
        }}
        required={required}
        disabled={disabled}
      />
      <Box {...descriptionProps} css={{ fontSize: '$4' }}>
        {props.description}
      </Box>
    </Flex>
  )
}
