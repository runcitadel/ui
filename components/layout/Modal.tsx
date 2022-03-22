//UTILITES
import { useRef } from 'react'
import { useOverlay, usePreventScroll, useModal } from '@react-aria/overlays'
import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'

//COMPONENTS
import { Box } from './Box'
import { Text } from '../typography/Text'
import { Flex } from './Flex'

export function Modal(props: React.ComponentProps<any>) {
	const { title, children } = props

	// Handle interacting outside the dialog and pressing
	// the Escape key to close the modal.
	const ref = useRef(null)
	const { overlayProps, underlayProps } = useOverlay(props, ref)

	// Prevent scrolling while the modal is open, and hide content
	// outside the modal from screen readers.
	usePreventScroll()
	const { modalProps } = useModal()

	// Get props for the dialog and its title
	const { dialogProps, titleProps } = useDialog(props, ref)

	return (
		<Flex
			css={{
				position: 'fixed',
				zIndex: 100,
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				transparentBackground: 0.75,
				ai: 'center',
				jc: 'center',
			}}
			{...underlayProps}
		>
			<FocusScope contain restoreFocus>
				<Box
					{...overlayProps}
					{...dialogProps}
					{...modalProps}
					ref={ref}
					css={{
						background: '$light',
						color: '$dark',
						p: '$3',
					}}
				>
					<Text as="h3" {...titleProps} css={{ mt: 0 }}>
						{title}
					</Text>
					{children}
				</Box>
			</FocusScope>
		</Flex>
	)
}
