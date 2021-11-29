//UTILS
import { useState } from "react";
import { darkTheme } from "../../styles/stitches.config";

//COMPONENTS
import { Button } from "../form/Button";
import { Flex } from "./Flex";
import { Text } from "../typography/Text";
import { TextField } from "../form/TextField";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { Box } from "./Box";

export function LockScreen() {
  //Todo: Query to see if the use has 2fa active
  //If so, then add the 2fa input, and make the user enter something in it
  const [password, setPassword] = useState("");
  const [twoFactorAuth, setTwoFactorAuth] = useState("");

  const submissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Todo: handle submission");
  };

  return (
    <>
      <ThemeToggle />
      <Flex
        as="form"
        css={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
        }}
        onSubmit={submissionHandler}
      >
        <Box
          css={{
            "@bp2": {
              maxWidth: 500,
            },
          }}
        >
          <Image src="/logo.svg" height={200} width={200} />
          <TextField
            label="Password"
            type="password"
            required={true}
            value={password}
            onChange={setPassword}
            showErrors={false}
          />
          <TextField
            label="Two-Factor Authentication"
            type="text"
            required={true}
            value={twoFactorAuth}
            onChange={setTwoFactorAuth}
            autoComplete="off"
            showErrors={false}
          />
          <Button
            filled="primary"
            type="submit"
            css={{
              mt: "$5",
            }}
          >
            Unlock Your Citadel
          </Button>
        </Box>
      </Flex>
      <Flex css={{ flexDirection: "column", alignItems: "flex-end" }}>
        <Text as="h1">Citadel</Text>
        <Text css={{ fontSize: "$5" }}>v0.0.1-alpha</Text>
        <Button
          css={{
            background: "$success",
            border: "none",
            padding: "$2 $3",
            mb: "$3",
            color: "$dark",
          }}
        >
          Update Available
        </Button>
      </Flex>
    </>
  );
}
