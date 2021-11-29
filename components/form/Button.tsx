//UTILS
import { useRef } from "react";
import { darkTheme, styled } from "../../styles/stitches.config";
import { useButton } from "@react-aria/button";

//MODELS
import { Props } from "../../models/Props";

export const BaseButton = styled("button", {
  borderWidth: "$sizes$1",
  borderStyle: "solid",
  borderColor: "$dark",
  cursor: "pointer",
  fontSize: "$4",
  padding: "$4 $5",
  boxShadow: "$2",
  "&:focus-visible": {
    outlineColor: "$focusRing",
    outlineWidth: "$sizes$2",
    outlineStyle: "solid",
  },
  "&:hover": {
    boxShadow: "$1",
  },
  "&:active": {
    transform: "translateY(3px)",
  },
  [`.${darkTheme} &`]: {
    borderColor: "$light",
  },
  variants: {
    filled: {
      default: {
        "&:focus-visible": {
          outlineColor: "$secondary",
          outlineWidth: "$sizes$2",
          outlineStyle: "solid",
          [`.${darkTheme} &`]: {
            outlineColor: "$focusRing",
          },
        },
        color: "$light",
        bc: "$dark",
      },
      primary: {
        color: "$light",
        bc: "$primary",
      },
      secondary: {
        color: "$light",
        bc: "$secondary",
      },
      tertiary: {
        color: "$dark",
        bc: "$tertiary",
      },
      transparent: {
        transparentBackground: 0,
        color: "$dark",
        [`.${darkTheme} &`]: {
          color: "$light",
        },
      },
    },
    borderRadius: {
      normal: {
        borderRadius: "$2",
      },
      round: {
        borderRadius: "$round",
      },
    },
  },
  defaultVariants: {
    filled: "default",
    borderRadius: "normal",
  },
});

export function Button(props: Props) {
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <BaseButton {...props} {...buttonProps} disabled={props.disabled} ref={ref}>
      {props.children}
    </BaseButton>
  );
}
