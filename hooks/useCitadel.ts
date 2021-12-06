import { Citadel } from "@runcitadel/sdk/browser/index.browser.js";
import { useEffect, useRef } from "react";

//React hook for using Citadel client-side (to use it server-side import from "./lib/citadel")
export function useCitadel() {
  //On first load set up a client-side Citadel instance that persists between re-renders
  const ref = useRef<Citadel | null>(null);
  //Todo: dynamically determine URL maybe with Citadel.discover() but currently getting CORs errors with that
  //Once that's working it should replace the hardcoded string below "http://citadel.local"
  if (!ref.current) {
    console.log("useCitadel setting ref");
    ref.current = new Citadel(
      process.env.NODE_ENV === "development"
        ? "http://citadel.local"
        : window.location.origin
    );
  }

  return ref.current;
}
