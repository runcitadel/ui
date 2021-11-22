import React, { forwardRef } from "react";
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
  boxShadow: "$1",
  ":hover": {
    boxShadow: "$2",
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

export const Button = (props: Props) => {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <ButtonStyled {...props} {...buttonProps} ref={ref}>
      {props.children}
    </ButtonStyled>
  );
};
