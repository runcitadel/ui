import Citadel from '@runcitadel/sdk/browser/citadel'

export const ping = (citadel: Citadel) => citadel.manager.ping()
export const isOnline = (citadel: Citadel) => citadel.isOnline()
export const isTotpEnabled = (citadel: Citadel) =>
  citadel.manager.auth.isTotpEnabled()
