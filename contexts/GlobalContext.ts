import { createContext } from "react";
import { Citadel } from "@runcitadel/sdk/browser/index.browser";

export const GlobalContext = createContext<Citadel | null>(null);
