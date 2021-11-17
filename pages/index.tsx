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
          <Label htmlFor="comment">Comment</Label>
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
          <Label>Slider</Label>
          <Slider mb={3} />
          <Heading>Toggle:</Heading>
          <Switch label="Enable email alerts?" mb={3} />
          <Button mb={3}>Button</Button>
          <Heading>Progress:</Heading>
          <Progress max={1} value={1 / 2} mb={3}>
            50%
          </Progress>
          <Heading mb={3}>Donut:</Heading>
          <Donut value={0.5} />
          <Heading>Spinner:</Heading>
          <Spinner mb={3} />
          <Heading>Badges</Heading>
          <Badge variant="accent">Accent Badge</Badge>
          <Badge variant="outline" ml={1} mb={3}>
            Outline Badge
          </Badge>
          <Heading>Close Button:</Heading>
          <Close mb={3} />
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
          <Heading>IconButton</Heading>
          <IconButton aria-label="Toggle dark mode" mb={3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentcolor"
            >
              <circle
                r={11}
                cx={12}
                cy={12}
                fill="none"
                stroke="currentcolor"
                strokeWidth={2}
              />
            </svg>
          </IconButton>
          <Heading>MenuButton</Heading>
          <MenuButton aria-label="Toggle Menu" mb={3} />
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
