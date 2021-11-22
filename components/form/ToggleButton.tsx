import { useToggleButton } from "@react-aria/button";
import { useToggleState } from "@react-stately/toggle";
import { useRef, forwardRef } from "react";
import { Props } from "../../models/Props";
import { Button } from "./Button";

//Todo: add pressed/active styles?
export const ToggleButton = (props: Props) => {
  let ref = useRef(null);
  let state = useToggleState(props);
  let { buttonProps, isPressed } = useToggleButton(
    { ...props, elementType: Button },
    state,
    ref
  );

  return (
    <Button
      ref={ref}
      {...buttonProps}
      css={{
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {props.children}
    </Button>
  );
};
