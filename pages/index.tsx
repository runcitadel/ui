//UTILTIES
import Citadel from "../lib/citadel";

//THEME & COMPONENTS
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  Themed,
  ThemeProvider,
} from "theme-ui";
import { theme } from "../src/theme";
import ColorModeSwitcher from "../src/components/layout/ColorModeSwitch";

//ASSETS
import { FaCircle, FaLock, FaUnlock } from "react-icons/fa";

//MODELS
import Online from "../src/models/Online";

interface Props {
  online: Online;
}

export default function App(props: Props) {
  const { online } = props;
  const statusColor = (serviceOnline: boolean | undefined) =>
    !online ? "orange" : serviceOnline ? "green" : "red";

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh" }}>
        <Grid columns={2}>
          <Flex
            p={3}
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <ColorModeSwitcher />
            <Box mt={1} p={1}>
              <Heading>Status</Heading>
              <Link href={process.env.BASE_URL}>{process.env.BASE_URL}</Link>
              <Box>
                <Flex sx={{ alignItems: "center" }}>
                  <Text mr={1}>Manager</Text>
                  <FaCircle color={statusColor(online?.manager)} />
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Text mr={1}>Middleware</Text>
                  <FaCircle color={statusColor(online?.middleware)} />
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Text mr={1}>Node</Text>
                  <FaCircle color={statusColor(online?.node)} />
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Text mr={1}>Lightning</Text>
                  <FaCircle
                    color={statusColor(online?.lnd?.operational)}
                    style={{ marginRight: 5 }}
                  />
                  {online?.lnd?.unlocked ? (
                    <FaUnlock color={statusColor(online?.lnd?.operational)} />
                  ) : (
                    <FaLock color={statusColor(online?.lnd?.operational)} />
                  )}
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex
            p={3}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/logo.svg"
              alt="Citadel logo"
              sx={{ maxWidth: ["90%", "250px"] }}
            />
            <Heading>Citadel</Heading>
          </Flex>
        </Grid>
        <Grid columns={2}>
          <Flex p={3} sx={{ flexDirection: "column", alignItems: "center" }}>
            <Text>Normal Text</Text>
            <Text variant="success">Success Text</Text>
            <Text variant="warning">Warning Text</Text>
            <Text variant="error">Error Text</Text>
            <Text variant="info">Info Text</Text>
            <Text variant="bitcoin">Bitcoin Text</Text>
            <Text variant="lightning">Lightning Text</Text>
            <Themed.pre>
              <Themed.code>{`function x() {
  return 'x'
}`}</Themed.code>
            </Themed.pre>
            <Card variant="primary" mb={3}>
              Primary Card <br />
              ...
            </Card>
            <Card variant="secondary" mb={3}>
              Secondary Card <br />
              ...
            </Card>
          </Flex>
          <Flex
            p={3}
            sx={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text>Normal Text</Text>
            <Heading>Heading Text</Heading>
            <Themed.h1>H1</Themed.h1>
            <Themed.h2>H2</Themed.h2>
            <Themed.h3>H3</Themed.h3>
            <Themed.h4>H4</Themed.h4>
            <Themed.h5>H5</Themed.h5>
            <Themed.h6>H6</Themed.h6>
          </Flex>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  return (
    Citadel.isOnline()
      .then((online: Online) => {
        return {
          props: { online },
        };
      })
      //Todo: handle error- throw snackbar
      .catch((err: ErrorEvent) => {
        console.error(err);
      })
  );
}
