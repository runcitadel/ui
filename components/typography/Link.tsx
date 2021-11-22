import { styled } from "../../styles/stitches.config";

export const Link = styled("a", {
  color: "$primary",
  "@dark": {
    color: "$tertiary",
  },
});
