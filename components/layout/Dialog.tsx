import { useOverlayTriggerState } from "@react-stately/overlays";
import { OverlayContainer } from "@react-aria/overlays";
import { useButton } from "@react-aria/button";
import { useRef } from "react";
import { Modal } from "./Modal";

type DialogProps = {
  title: string;
  triggerText: string;
  submitText: string;
  //Todo: should we define types for this anon function and/or children??
  handleSubmission?: () => void;
  children?: any;
};

export function Dialog(props: DialogProps) {
  const {
    title = "Dialog Title",
    submitText = "Submit",
    triggerText = "Open Dialog",
    handleSubmission,
  } = props;

  let state = useOverlayTriggerState({});
  let openButtonRef = useRef(null);
  let closeButtonRef = useRef(null);

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  let { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  let { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  );

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        {triggerText}
      </button>
      {state.isOpen && (
        <OverlayContainer>
          <Modal title={title} isOpen onClose={state.close} isDismissable>
            <form style={{ display: "flex", flexDirection: "column" }}>
              {props.children}
              <button
                {...closeButtonProps}
                ref={closeButtonRef}
                style={{ marginTop: 10 }}
                onClick={handleSubmission}
              >
                {submitText}
              </button>
            </form>
          </Modal>
        </OverlayContainer>
      )}
    </>
  );
}
