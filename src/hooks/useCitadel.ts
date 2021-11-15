//UTILITIES
import { useState, useEffect } from "react";
import { Citadel } from "@runcitadel/sdk";

//MODELS
import Online from "../models/Online";

export default function useCitadel() {
  const [node, setNode] = useState<string | null>(null);
  const [citadel, setCitadel] = useState<Citadel | null>(null);
  const [online, setOnline] = useState<Online | null>(null);

  console.log(online);

  useEffect(() => {
    Citadel.discover()
      .then((node) => setNode(node ? node : "http://citadel.local"))
      //Todo: handle error throw snackbar
      .catch((err) => {
        setNode(null);
        console.error(err);
      });
  }, [setNode]);

  useEffect(() => {
    if (node) {
      try {
        const citadel = new Citadel(node);
        setCitadel(citadel);
        citadel.isOnline().then((online) => setOnline(online));
      } catch (err) {
        setCitadel(null);
        setOnline(null);
        //Todo: handle error throw snackbar
        console.error(err);
      }
    } else setCitadel(null);
  }, [node, setCitadel]);

  return {
    node,
    citadel,
    online,
  };
}
