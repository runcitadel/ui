import { Props } from "../../models/Props";
import { styled } from "../../styles/stitches.config";

//This is mainly for semantic purposes.. using composition to create a stitches styled component
//for any HTML5 tag in order to use theme tokens in CSS-in-JS for any HTML5 tag
//There is a required "as" prop where you define the html tag string or component

const AnyBase = styled("div");
type AnyProps = Props & { as: string };

export function Any(props: AnyProps) {
  return <AnyBase {...props} />;
}
