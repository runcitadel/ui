import { styled } from "../../styles/stitches.config";

const NewLineBase = styled("br", {
  mt: "$2",
});

export function NewLine(props: { lines?: number }) {
  const { lines = 1 } = props;
  return (
    <>
      {[new Array(lines, null)].map((_, index) => (
        <NewLineBase key={index} />
      ))}
    </>
  );
}
