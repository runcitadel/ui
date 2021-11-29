import { styled } from "../../styles/stitches.config";

const BR = styled("br", {
  mt: "$2",
});

export default (lines: number) =>
  [new Array(lines, null)].map((key, value) => <BR />);
