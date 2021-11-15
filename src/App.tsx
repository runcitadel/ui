//UTILTIES
import { theme } from "./theme";
import useCitadel from "./hooks/useCitadel";

//THEME & COMPONENTS
import { Box, Flex, Grid, Image, Heading, Text, ThemeProvider } from "theme-ui";
import ColorModeSwitcher from "./components/layout/ColorModeSwitch";

//ASSETS
import logo from "./assets/logo.svg";
import { FaCircle, FaLock, FaUnlock } from "react-icons/fa";

export default function App() {
  const { node, online } = useCitadel();

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
              <Text>{node}</Text>
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
                  {online?.lnd?.unlocked ? <FaUnlock /> : <FaLock />}
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
              src={logo}
              alt="Citadel logo"
              sx={{ maxWidth: ["90%", "250px"] }}
            />
            <Heading>Citadel</Heading>
          </Flex>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
