import { useOverlay, usePreventScroll, useModal } from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";
import { useRef } from "react";
import { Props } from "../../models/Props";
import { Box } from "./Box";
import { Text } from "../typography/Text";
import { Flex } from "./Flex";

export function Modal(props: Props) {
  let { title, children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let ref = useRef(null);
  let { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <Flex
      css={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transparentBackground: 0.75,
        alignItems: "center",
        justifyContent: "center",
      }}
      {...underlayProps}
    >
      <FocusScope contain restoreFocus autoFocus>
        <Box
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          css={{
            background: "$light",
            color: "$dark",
            p: "$3",
          }}
        >
          <Text as="h3" {...titleProps} css={{ marginTop: 0 }}>
            {title}
          </Text>
          {children}
        </Box>
      </FocusScope>
    </Flex>
  );
}
