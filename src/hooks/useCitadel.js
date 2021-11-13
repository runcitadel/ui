import { useState, useEffect } from "react";
import { Citadel } from "@runcitadel/sdk";

export default function useCitadel() {
  const [node, setNode] = useState(null);
  const [citadel, setCitadel] = useState(null);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    Citadel.discover()
      .then((node) => setNode(node ? node : "http://citadel.local"))
      .catch((err) => setNode(null));
  }, [setNode]);

  useEffect(() => {
    if (node) {
      try {
        const citadel = new Citadel(node);
        setCitadel(citadel);
        citadel.isOnline().then((online) => setOnline(online));
      } catch (err) {
        setCitadel(null);
        setOnline(false);
        console.log(err);
      }
    } else setCitadel(null);
  }, [node, setCitadel]);

  return {
    node,
    citadel,
    online,
  };
}
