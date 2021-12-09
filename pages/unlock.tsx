//UTILS
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { citadelStatus } from "../lib/citadelStatus";

//COMPONENTS
import { Box } from "../components/layout/Box";
import { Button } from "../components/form/Button";
import { Flex } from "../components/layout/Flex";
import Image from "next/image";
import { Text } from "../components/typography/Text";
import { TextField } from "../components/form/TextField";
import { ThemeToggle } from "../components/layout/ThemeToggle";

//CONTEXT
import { GlobalContext } from "../contexts/GlobalContext";

export default function Unlock(props: { isTotpEnabled: boolean }) {
  const { isTotpEnabled } = props;
  const router = useRouter();
  const citadel = useContext(GlobalContext);
  const [password, setPassword] = useState("");
  const [totpToken, setTotpToken] = useState("");

  const submissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (citadel)
      citadel
        .login(password, totpToken)
        .then((res) => {
          //Todo: throw success modal
          console.log("Unlock success");
          router.push("/");
        })
        .catch((err) => {
          //Todo: throw error modal
          console.error(err);
        });
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
            centerLabel
            label="Password"
            type="password"
            required={true}
            value={password}
            onChange={setPassword}
            showErrors={false}
          />
          {isTotpEnabled && (
            <TextField
              centerLabel
              label="Two-Factor Authentication"
              type="text"
              required={true}
              value={totpToken}
              onChange={setTotpToken}
              autoComplete="off"
              showErrors={false}
            />
          )}
          <Button
            filled="primary"
            type="submit"
            css={{
              mt: "$5",
            }}
          >
            Unlock
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

export async function getServerSideProps() {
  return { props: await citadelStatus() };
}
