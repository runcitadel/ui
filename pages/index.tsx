//MODELS
import { Props } from "../models/Props";

export default function App() {
  return <>Index..</>;
}

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}
