import { Flex } from "./Flex";
import { Button } from "../form/Button";
import { Text } from "../typography/Text";
import { TextField } from "../form/TextField";
import { ThemeToggle } from "./ThemeToggle";
import { NavDrawerToggle } from "./NavDrawerToggle";

export default function Lock() {
  return (
    <Flex
      css={{
        padding: "$4",
        flexDirection: "column",
        ai: "flex-start",
        jc: "space-between",
      }}
    >
      <ThemeToggle />
      <Flex
        css={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <NavDrawerToggle />
        <TextField
          label="Unlock Your Citadel"
          placeholder="s1r0nGp@s5w0rD!"
          type="password"
        />
      </Flex>
      <Flex css={{ flexDirection: "column", alignItems: "flex-end" }}>
        <Text as="h1">Citadel</Text>
        <Text css={{ fontSize: "$5" }}>v0.0.1-alpha</Text>
        <Button
          css={{
            background: "$success",
            padding: "0 $1",
            mb: "$3",
            color: "$dark",
          }}
        >
          Update Available
        </Button>
      </Flex>
    </Flex>
  );
}
