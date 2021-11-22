import { Citadel } from "@runcitadel/sdk/browser/index.browser.js";

const citadel = new Citadel(process.env.BASE_URL || window.location.origin);

export default citadel;
