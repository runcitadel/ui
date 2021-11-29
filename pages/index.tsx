//MODELS
import { Props } from "../models/Props";

// This will be the "landing page" or "dashboard page" after the user logs in
export default function Index() {
  return <>Dashboard..</>;
}

export async function getServerSideProps() {
  return {
    props: {
      protected: true,
    },
  };
}
