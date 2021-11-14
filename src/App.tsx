//UTILTIES
import { theme } from "./theme";
import useCitadel from "./hooks/useCitadel";
import prettyJson from "./utils/prettyJson";

//THEME
import {
  Box,
  Card,
  Grid,
  Heading,
  Text,
  Themed,
  ThemeProvider,
} from "theme-ui";

//COMPONENTS
import ColorModeSwitcher from "./components/layout/ColorModeSwitch";

//ICONS
import Logo from "./components/layout/Logo";

export default function App() {
  const { node, online } = useCitadel();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh" }}>
        <Grid p={3}>
          <ColorModeSwitcher />
          <Logo />
          {[
            { value: node, text: "Node" },
            { value: online, text: "Online" },
          ].map(({ text, value }) => (
            <Card key={text}>
              <Heading>{text}</Heading>
              <Themed.pre>
                <Themed.code>
                  {value ? prettyJson(value) : <Text>"Loading..."</Text>}
                </Themed.code>
              </Themed.pre>
            </Card>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
