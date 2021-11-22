//UTILS
import { useRef } from "react";
import { useSearchField } from "@react-aria/searchfield";
import { useSearchFieldState } from "@react-stately/searchfield";

//MODELS
import { Props } from "../../models/Props";

export function SearchField(props: Props) {
  let { label } = props;
  let state = useSearchFieldState(props);
  let ref = useRef(null);
  let { labelProps, inputProps } = useSearchField(props, state, ref);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
    </div>
  );
}
