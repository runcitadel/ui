import { createContext } from "react";
import { Citadel } from "@runcitadel/sdk/browser/index";

export const GlobalContext = createContext<Citadel | null>(null);
