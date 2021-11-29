import { Citadel as CitadelBase } from "@runcitadel/sdk/browser/index.browser.js";
import { BASE_URL } from "./BASE_URL";

export const Citadel = new CitadelBase(BASE_URL);

Citadel.isOnline().then((res) => console.log(res, "res"));
