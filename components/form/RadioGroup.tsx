//UTILS
import { createContext, useContext, useRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useRadio, useRadioGroup } from "@react-aria/radio";

//MODELS
import { Props } from "../../models/Props";

//STATE
import { useRadioGroupState } from "@react-stately/radio";

//COMPONENTS
import { Any } from "../layout/Any";
import { VisuallyHidden } from "@react-aria/visually-hidden";

let RadioContext = createContext<any>(null);

function RadioGroup(props: Props) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}
export function Radio(props: any) {
  let { children } = props;
  let state = useContext(RadioContext);
  let ref = useRef(null);
  let { inputProps } = useRadio(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  let isSelected = state.selectedValue === props.value;
  let strokeWidth = isSelected ? 6 : 2;

  return (
    <Any as="label" css={{ display: "flex", alignItems: "center" }}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <Any as="svg" width={24} height={24} aria-hidden="true" css={{ mr: 4 }}>
        <Any
          as="circle"
          cx={12}
          cy={12}
          r={8 - strokeWidth / 2}
          fill="none"
          css={{ stroke: isSelected ? "$primary" : "$light" }}
          strokeWidth={strokeWidth}
        />
        {isFocusVisible && (
          <circle
            cx={12}
            cy={12}
            r={11}
            fill="none"
            stroke="orange"
            strokeWidth={2}
          />
        )}
      </Any>
      {children}
    </Any>
  );
}
