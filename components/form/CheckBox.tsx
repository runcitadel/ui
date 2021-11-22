import React from "react";
import { styled } from "../../styles/stitches.config";
import { useCheckbox } from "@react-aria/checkbox";
import { useToggleState } from "@react-stately/toggle";
import { Props } from "../../models/Props";

const StyledCheckbox = styled("input", {
  backgroundColor: "$dark",
  color: "$light",
  boxShadow: "$2",
  background: "$primary",
  fontSize: "$4",

  padding: "$2 $3",
  border: "none",
  borderRadius: "$1",

  variants: {
    outlined: {
      true: {
        border: "2px solid $muted",
        borderColor: "$muted",
        borderRadius: "$1",
      },
    },
  },
});

//Todo: add label
export function Checkbox(props: Props): JSX.Element {
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps } = useCheckbox(props, state, ref);

  return (
    <StyledCheckbox {...inputProps} ref={ref}>
      {props.children}
    </StyledCheckbox>
  );
}
