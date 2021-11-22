//COMPONENTS
import { Flex } from "../components/layout/Flex";
import { Button } from "../components/form/Button";
import { Checkbox } from "../components/form/CheckBox";
import { TextField } from "../components/form/TextField";
import { Switch } from "../components/form/Switch";
import { SearchField } from "../components/form/SearchField";

//MODELS
import { Props } from "../models/Props";

export default function App(props: Props) {
  return (
    <>
      <Flex
        css={{
          mt: "$3",
          jc: "space-around",
          "@bp2": {
            jc: "flex-start",
          },
        }}
      >
        <Button>Button</Button>
        <Button filled="primary">Primary</Button>
        <Button filled="secondary">Secondary</Button>
        <Button filled="tertiary">Tertiary</Button>
      </Flex>
      <Flex
        css={{
          mt: "$3",
          jc: "space-around",
          "@bp2": {
            jc: "flex-start",
          },
        }}
      >
        <Checkbox label="Checkbox">Check</Checkbox>
        <Switch label="Switch" />
      </Flex>
      <TextField label="Text Field" placeholder="Text here.." />
      <SearchField label="Search" placeholder="What are you looking for?" />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}
