import Citadel from "@runcitadel/sdk";

//Citadel instance for using Citadel server-side (to use it client-side use "./hooks/useCitadel")
export const citadel = new Citadel(process.env.BASE_URL as string);
