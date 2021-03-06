//UTILS
import { useState } from "react";
import { useToggleState } from "@react-stately/toggle";

//COMPONENTS
import { Box } from "../components/layout/Box";
import { Button } from "../components/form/Button";
import { Checkbox } from "../components/form/CheckBox";
import { Dialog } from "../components/layout/Dialog";
import { Flex } from "../components/layout/Flex";
import { SearchField } from "../components/form/SearchField";
import { Switch } from "../components/form/Switch";
import { TextField } from "../components/form/TextField";
import { Text } from "../components/typography/Text";
import { ThemeToggle } from "../components/layout/ThemeToggle";

//MODELS
import { Props } from "../models/Props";

export default function App(props: Props) {
  const checkboxState = useToggleState();
  const switchState = useToggleState();
  const [textFieldValue, setTextFieldValue] = useState("");
  const [textField2Value, setTextField2Value] = useState("");
  const [textField3Value, setTextField3Value] = useState("");
  const [textField4Value, setTextField4Value] = useState("");
  return (
    <>
      <Flex
        css={{ jc: "space-between", ai: "center", mb: "$5", width: "100%" }}
      >
        <ThemeToggle />
        <Text as="h1" css={{ pl: "$1" }}>
          Citadel <br /> Design <br /> System <br />
        </Text>
      </Flex>

      <Button css={{ mb: "$5" }}>Button</Button>
      <Button filled="primary" css={{ mb: "$5" }}>
        Primary Button
      </Button>
      <Button filled="secondary" css={{ mb: "$5" }}>
        Secondary Button
      </Button>
      <Button filled="tertiary" css={{ mb: "$5" }}>
        Tertiary Button
      </Button>
      <Button filled="transparent" css={{ mb: "$5" }}>
        Transparent Button
      </Button>
      <Box css={{ mb: "$5" }}>
        <Button filled="default" css={{ br: "$round" }}>
          Round
          <br />
          Button
        </Button>
      </Box>

      <Checkbox
        label="Checkbox"
        state={checkboxState}
        css={{ mb: "$5" }}
        size={2}
      >
        CheckBox
      </Checkbox>
      <Switch label="Switch" state={switchState} css={{ mb: "$5" }}>
        Switch
      </Switch>
      <TextField
        label="TextField w/ Description"
        placeholder="placeholder..."
        value={textFieldValue}
        onChange={(x: string) => setTextFieldValue(x)}
        css={{ mb: "$5" }}
        description="TextField description TextField description TextField description TextField description"
      />
      <TextField
        label="Login Password"
        type="password"
        placeholder="placeholder..."
        value={textField2Value}
        onChange={(x: string) => setTextField2Value(x)}
        required={true}
        css={{ mb: "$5" }}
      />
      <TextField
        label="New Password"
        newPassword
        type="password"
        placeholder="placeholder..."
        value={textField3Value}
        onChange={(x: string) => setTextField3Value(x)}
        required={true}
        css={{ mb: "$5" }}
      />
      <TextField
        label="DisabledTextField"
        placeholder="placeholder..."
        value={textField4Value}
        onChange={(x: string) => setTextField4Value(x)}
        disabled={true}
        css={{ mb: "$5" }}
      />
      <SearchField
        label="SearchField"
        placeholder="placeholder..."
        css={{ mb: "$5" }}
      />
      <Dialog
        title="Design page dialog title!!"
        triggerText="Open dialog"
        submitText="oooook"
      >
        Design page dialog content..
        <br />
        More...
        <br />
        ..
        <br />
      </Dialog>
    </>
  );
}
