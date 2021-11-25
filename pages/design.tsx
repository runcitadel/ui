//COMPONENTS
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
  return (
    <>
      <Flex
        css={{
          px: "$3",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Flex css={{ justifyContent: "space-around", alignItems: "center" }}>
          <ThemeToggle />
          <Text as="h1"> Citadel</Text>
        </Flex>
        <Button>Button</Button>
        <Button filled="primary">Primary Button</Button>
        <Button filled="secondary">Secondary Button</Button>
        <Button filled="tertiary">Tertiary Button</Button>

        <Checkbox label="Checkbox">CheckBox</Checkbox>
        <Switch label="Switch">Switch</Switch>
        <TextField label="TextField" placeholder="TextField..." />
        <SearchField
          label="SearchField (TextField w/Clear button)"
          placeholder="- SearchFieldTextField w/Clear button?"
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
      </Flex>
    </>
  );
}

// Below is an example of how to protect a page.
// Currently index.tsx is the only page I am worried about protecting.
// This is file is for the "staging" of all components which will be used in the application.

// export async function getStaticProps() {
//   return {
//     props: {
//       protected: true,
//     },
//   };
// }
