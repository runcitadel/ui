import { styled } from "../../styles/stitches.config";

export const Text = styled("span", {
  variants: {
    link: {
      true: {
        color: "$primary",
        "@dark": {
          color: "$tertiary",
        },
      },
    },
  },
});
