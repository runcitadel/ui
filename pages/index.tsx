//UTILS
import { citadelStatus } from "../lib/citadelStatus";

//COMPONENTS
import { Box } from "../components/layout/Box";

// This will be the "landing page" or "dashboard page" after the user logs in
export default function Index() {
  return <Box>Dashboard..</Box>;
}

export async function getServerSideProps() {
  return { props: { ...(await citadelStatus()), protectedRoute: true } };
}
