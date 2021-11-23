import { useTextField } from "@react-aria/textfield";
import { InputHTMLAttributes, useRef } from "react";
import { Props } from "../../models/Props";
import { styled } from "../../styles/stitches.config";

const TextFieldBase = styled("input", {
  padding: "$3 $2",
  fontSize: "$5",
  textAlign: "center",
  borderRadios: "$2",
  "@bp2": {
    fontSize: "$9",
    padding: "$3 $2",
    height: "auto",
    width: "100%",
  },
});

const TextFieldLabelBase = styled("label", {
  fontSize: "$6",
  marginBottom: "$1",
  "@bp2": {
    fontSize: "$10",
    marginBottom: "$3",
  },
});

export function TextField(props: Props) {
  let { label } = props;
  let ref = useRef(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextFieldLabelBase {...labelProps}>{label}</TextFieldLabelBase>
      <TextFieldBase
        {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
        ref={ref}
      />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}
