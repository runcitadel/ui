//UTILS
import { useRef } from "react";
import { darkTheme, styled } from "../../styles/stitches.config";
import { useCheckbox } from "@react-aria/checkbox";
import { useFocusRing } from "@react-aria/focus";

//MODELS
import { Props } from "../../models/Props";

//COMPONENTS
import { Any } from "../layout/Any";
import { VisuallyHidden } from "@react-aria/visually-hidden";

export const ToggleLabel = styled("label", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:active": {
    transform: "translateY(3px)",
  },
});

export function Checkbox(props: Props) {
  let { state, size = 2 } = props;
  let ref = useRef(null);
  let { inputProps } = useCheckbox(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <ToggleLabel>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <Any
        as="svg"
        width={24 * size}
        height={24 * size}
        aria-hidden="true"
        css={{
          marginRight: "$2",
        }}
      >
        <Any
          as="rect"
          transform={`translate(${1.5 * size} ${1.5 * size})`}
          x={3 * size}
          y={3 * size}
          width={15 * size}
          height={15 * size}
          css={{
            rx: "$radii$3",
            fill: "$primary",
            stroke: "$dark",
            "&:active": {
              rx: "$radii$3",
              strokeWidth: "$sizes$2",
              stroke: "$focusRing",
            },
            [`.${darkTheme} &`]: {
              stroke: "$muted",
            },
          }}
        />
        {state.isSelected && (
          <>
            <Any
              as="line"
              transform={`translate(${3 * size} ${3 * size})`}
              x1={4 * size}
              y1={9 * size}
              x2={6 * size}
              y2={12 * size}
              strokeWidth="3"
              strokeDashArray="270"
              strokeDashOffset="270"
              css={{
                fill: "$secondary",
                stroke: "$light",
              }}
            />
            <Any
              as="line"
              transform={`translate(${3 * size} ${3 * size})`}
              x1={13 * size}
              y1={5 * size}
              x2={6 * size}
              y2={12 * size}
              strokeWidth="3"
              strokeDashArray="270"
              strokeDashOffset="270"
              css={{
                fill: "none",
                stroke: "$light",
              }}
            />
          </>
        )}
        {isFocusVisible && (
          <Any
            as="rect"
            x={4 * size}
            y={4 * size}
            width={15 * size}
            height={15 * size}
            fill="none"
            css={{
              rx: "$radii$3",
              strokeWidth: "$sizes$2",
              stroke: "$focusRing",
            }}
          />
        )}
      </Any>
      {props.children}
    </ToggleLabel>
  );
}
