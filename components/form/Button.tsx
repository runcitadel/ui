import React from "react";
import { styled } from "../../styles/stitches.config";
import { useButton } from "@react-aria/button";
import { Props } from "../../models/Props";

const ButtonStyled = styled("button", {
  cursor: "pointer",
  backgroundColor: "$dark",
  color: "$light",
  fontSize: "$4",
  padding: "$2 $3",
  border: "1px solid $muted",
  borderColor: "$muted",
  borderRadius: "$2",
  boxShadow: "$2",
  ":hover": {
    boxShadow: "$3",
  },
  variants: {
    filled: {
      primary: {
        bc: "$primary",
      },
      secondary: {
        bc: "$secondary",
        color: "$darker",
      },
      tertiary: {
        bc: "$tertiary",
        color: "$dark",
      },
    },
    round: {
      true: {
        borderRadius: "$round",
      },
    },
    transparent: {
      true: {
        border: "none",
        background: "$transparent",
      },
    },
  },
});

export function Button(props: Props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <ButtonStyled {...props} {...buttonProps} ref={ref}>
      {props.children}
    </ButtonStyled>
  );
}
