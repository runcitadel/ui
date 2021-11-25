import React, { useRef } from "react";
import { styled } from "../../styles/stitches.config";
import { useCheckbox } from "@react-aria/checkbox";
import { useFocusRing } from "@react-aria/focus";
import { useToggleState } from "@react-stately/toggle";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { Props } from "../../models/Props";

//Pretty much I just want stitches' "css" prop on this HTML element.
//See the "css=" props below. I wanted to use stiches to dynamically pull in theme color tokens..
const StyledRect = styled("rect");

//Todo: light mode focus wring currently not visible
export function Checkbox(props: Props) {
  let state = useToggleState(props);
  let ref = useRef(null);
  let { inputProps } = useCheckbox(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <StyledRect
          x={state.isSelected ? 4 : 5}
          y={state.isSelected ? 4 : 5}
          width={state.isSelected ? 16 : 14}
          height={state.isSelected ? 16 : 14}
          css={{
            fill: state.isSelected ? "$primary" : "none",
            stroke: state.isSelected ? "none" : "$light",
          }}
          strokeWidth={2}
        />
        {state.isSelected && (
          <path
            transform="translate(7 7)"
            d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
          />
        )}
        {isFocusVisible && (
          <StyledRect
            x={1}
            y={1}
            width={22}
            height={22}
            fill="none"
            strokeWidth={2}
            css={{
              stroke: "$dark",
              modes: {
                dark: {
                  stroke: "$light",
                },
              },
            }}
          />
        )}
      </svg>
      {props.children}
    </label>
  );
}
