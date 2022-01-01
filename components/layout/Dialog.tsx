import { useOverlayTriggerState } from '@react-stately/overlays'
import { OverlayContainer } from '@react-aria/overlays'
import { useButton } from '@react-aria/button'
import { useRef } from 'react'
import { Modal } from './Modal'
import { BaseButton } from '../form/Button'
import { Flex } from './Flex'

type DialogProps = {
  title: string
  triggerText: string
  submitText: string
  //Todo: should we define types for this anon function and/or children??
  handleSubmission?: () => void
  children?: any
}

export function Dialog(props: DialogProps) {
  const {
    title = 'Dialog Title',
    submitText = 'Submit',
    triggerText = 'Open Dialog',
    handleSubmission,
  } = props

  const state = useOverlayTriggerState({})
  const openButtonRef = useRef(null)
  const closeButtonRef = useRef(null)

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  const { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  )

  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  )

  return (
    <>
      <BaseButton {...openButtonProps} ref={openButtonRef}>
        {triggerText}
      </BaseButton>
      {state.isOpen && (
        <OverlayContainer>
          <Modal title={title} isOpen onClose={state.close} isDismissable>
            <Flex as="form" css={{ fd: 'column' }}>
              {props.children}
              {/* Todo: Should this be the /components/form/Button component instead of a native button? */}
              <button
                {...closeButtonProps}
                ref={closeButtonRef}
                style={{ mt: 10 }}
                onClick={handleSubmission}
              >
                {submitText}
              </button>
            </Flex>
          </Modal>
        </OverlayContainer>
      )}
    </>
  )
}
