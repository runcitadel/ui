import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useToggleState } from "@react-stately/toggle";
import { useFocusRing } from "@react-aria/focus";
import { Props } from "../../models/Props";
import { useRef } from "react";
import { useSwitch } from "@react-aria/switch";
import { styled } from "../../styles/stitches.config";

//Pretty much I just want stitches' "css" prop on these HTML elements.
//See the "css=" props below. I wanted to use stiches to dynamically pull in theme color tokens..
const StyledRect = styled("rect");
const StyledCircle = styled("circle");

//Todo: add label
export function Switch(props: Props) {
  let state = useToggleState(props);
  let ref = useRef(null);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={40} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <StyledRect
          x={4}
          y={4}
          width={32}
          height={16}
          rx={8}
          //Todo: Should this be the same color when selected/unselected?
          //The visual feedback of unselected/deselected is perhaps helpful?
          //But to the visually capable it is perhaps uglier?
          //IMO they should be the same background color so I am replacing the original code...
          // css={{ fill: state.isSelected ? "$primary" : "$muted" }}
          css={{ fill: "$primary" }}
        />
        <StyledCircle
          cx={state.isSelected ? 28 : 12}
          cy={12}
          r={5}
          css={{ fill: "$light" }}
        />
        {isFocusVisible && (
          <StyledRect
            x={1}
            y={1}
            width={38}
            height={22}
            rx={11}
            fill="none"
            css={{
              stroke: "$focusRingColor",
              modes: {
                dark: {
                  stroke: "$dark",
                },
              },
            }}
            strokeWidth={2}
          />
        )}
      </svg>
      {props.children}
    </label>
  );
}
