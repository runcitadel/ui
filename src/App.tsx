import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import useCitadel from "./hooks/useCitadel";

export const App = () => {
  const { node, online } = useCitadel();

  const prettyJson = (x: any) => JSON.stringify(x, null, 5);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            {[
              { value: node, text: "Node" },
              { value: online, text: "Online" },
            ].map(({ text, value }) => (
              <>
                <Heading>{text}</Heading>
                <Code fontSize="xl">
                  {value ? prettyJson(value) : <Text>"Loading..."</Text>}
                </Code>
              </>
            ))}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
