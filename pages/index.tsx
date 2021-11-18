//UTILTIES
import Citadel from "../lib/citadel";

//THEME & COMPONENTS
import {
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Close,
  Divider,
  Donut,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Input,
  Link,
  Label,
  MenuButton,
  Message,
  NavLink,
  Paragraph,
  Progress,
  Radio,
  Select,
  Slider,
  Spinner,
  Switch,
  Text,
  Textarea,
  Themed,
  ThemeProvider,
} from "theme-ui";
import { theme } from "../src/theme";
import ColorModeSwitcher from "../src/components/layout/ColorModeSwitch";

//ASSETS
import { FaCircle, FaLock, FaUnlock } from "react-icons/fa";
import { BitcoinIcon } from "@bitcoin-design/bitcoin-icons-react/filled";

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
            <Image
              src="/logo.svg"
              alt="Citadel logo"
              sx={{ maxWidth: ["90%", "250px"] }}
            />
          </Flex>
          <Flex
            p={3}
            sx={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Heading>Citadel</Heading>
            <Link href={process.env.BASE_URL}>{process.env.BASE_URL}</Link>
            <Box>
              <Flex sx={{ alignItems: "center", justifyContent: "flex-end" }}>
                <Text mr={1}>Manager</Text>
                <FaCircle color={statusColor(online?.manager)} />
              </Flex>
              <Flex sx={{ alignItems: "center", justifyContent: "flex-end" }}>
                <Text mr={1}>Middleware</Text>
                <FaCircle color={statusColor(online?.middleware)} />
              </Flex>
              <Flex sx={{ alignItems: "center", justifyContent: "flex-end" }}>
                <Text mr={1}>Lightning</Text>
                <FaCircle color={statusColor(online?.lnd?.operational)} />
                {online?.lnd?.unlocked ? (
                  <FaUnlock color={statusColor(online?.lnd?.operational)} />
                ) : (
                  <FaLock color={statusColor(online?.lnd?.operational)} />
                )}
              </Flex>
            </Box>
          </Flex>
        </Grid>
        <Divider />
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
              ........................ <br />
              ........................ <br />
              ........................ <br />
            </Card>
            <Card variant="secondary" mb={3}>
              Secondary Card <br />
              ........................ <br />
              ........................ <br />
              ........................ <br />
            </Card>
            <Heading mb={3}>Badges</Heading>
            <Badge variant="accent" mb={3}>
              Accent Badge
            </Badge>
            <Badge variant="outline" ml={1} mb={3}>
              Outline Badge
            </Badge>
            <Heading>Close Button:</Heading>
            <Close mb={3} />
            <Heading>IconButton</Heading>
            <IconButton aria-label="BitcoinIcon" mb={3}>
              <BitcoinIcon style={{ color: "#F7931A" }} />
            </IconButton>
            <Heading>MenuButton</Heading>
            <MenuButton aria-label="Toggle Menu" mb={3} />
          </Flex>
          <Flex
            p={3}
            sx={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Heading>Heading</Heading>
            <Text>Normal</Text>
            <Themed.h1>H1</Themed.h1>
            <Themed.h2>H2</Themed.h2>
            <Themed.h3>H3</Themed.h3>
            <Themed.h4>H4</Themed.h4>
            <Themed.h5>H5</Themed.h5>
            <Themed.h6>H6</Themed.h6>
            <Paragraph sx={{ wordBreak: "break-all" }}>
              {"Paragraph".repeat(11)}
            </Paragraph>
            <Label>Slider</Label>
            <Slider mb={3} />
            <Heading>Toggle:</Heading>

            <Button mb={3}>Button</Button>
            <Heading>Progress:</Heading>
            <Progress max={1} value={1 / 2} mb={3}>
              50%
            </Progress>
            <Heading mb={3}>Donut:</Heading>
            <Donut value={0.5} />
            <Heading>Spinner:</Heading>
            <Spinner mb={3} />
          </Flex>
        </Grid>
        <Divider />
        <Box p={3} as="form" onSubmit={(e) => e.preventDefault()}>
          <Label htmlFor="username">Username</Label>
          <Input name="username" id="username" mb={3} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" mb={3} />
          <Box>
            <Label mb={3}>
              <Checkbox />
              Remember me
            </Label>
          </Box>
          <Label htmlFor="sound">Sound</Label>
          <Select name="sound" id="sound" mb={3}>
            <option>Beep</option>
            <option>Boop</option>
            <option>Blip</option>
          </Select>
          <Switch label="Enable something?" mb={3} />
          <Label mt={3} htmlFor="comment">
            Comment
          </Label>
          <Textarea name="comment" id="comment" rows={6} mb={3} />
          <Flex mb={3}>
            <Label>
              <Radio name="letter" /> Alpha
            </Label>
            <Label>
              <Radio name="letter" /> Bravo
            </Label>
            <Label>
              <Radio name="letter" /> Charlie
            </Label>
          </Flex>

          <Alert variant="success" mb={3}>
            Success Alert
            <Close ml="auto" mr={-2} />
          </Alert>
          <Alert variant="warning" mb={3}>
            Warning Alert
            <Close ml="auto" mr={-2} />
          </Alert>
          <Alert variant="error" mb={3}>
            Error Alert
            <Close ml="auto" mr={-2} />
          </Alert>
          <Alert variant="info" mb={3}>
            Info Alert
            <Close ml="auto" mr={-2} />
          </Alert>
          <Flex as="nav" mb={3}>
            <NavLink href="#!" p={2}>
              NavLink
            </NavLink>
            <NavLink href="#!" p={2}>
              NavLink
            </NavLink>
            <NavLink href="#!" p={2}>
              NavLink
            </NavLink>
          </Flex>
          <Message mb={3}>This is just a message for someone to read</Message>
        </Box>
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
