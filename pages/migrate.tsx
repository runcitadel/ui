//UTILS
import { citadelStatus } from "../lib/citadelStatus";

//COMPONENTS
import { Flex } from "../components/layout/Flex";
import { NewLine } from "../components/typography/NewLine";
import { Text } from "../components/typography/Text";

export default function Migrate() {
  return (
    <Flex css={{ fd: "column", ai: "center", jc: "center" }}>
      <Text as="h1">It appears that you may be running an Umbrel?</Text>
      <Text as="p">
        Migration is not currently possible from Citadel's new UI.
        <NewLine />
        Please ask for help.
      </Text>
    </Flex>
  );
}

export async function getServerSideProps() {
  return { props: await citadelStatus() };
}
