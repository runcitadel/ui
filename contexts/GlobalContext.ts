import { createContext } from "react";
import Citadel from "@runcitadel/sdk/browser/index.js";

export const GlobalContext = createContext<Citadel | null>(null);
