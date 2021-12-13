import Citadel from '@runcitadel/sdk/browser/index.js'

//Create new Citadel instance for using Citadel server-side (to use it client-side use "./hooks/useCitadel")
export function getCitadel() {
  return new Citadel(process.env.BASE_URL as string)
}
