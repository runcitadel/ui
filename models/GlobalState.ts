export type GlobalState = {
  features: string[]
  isOnline: {
    manager: boolean
    middleware: boolean
    node: boolean
    lnd: { operational: boolean; unlocked: boolean }
  }
  isRegistered: boolean
  isTotpEnabled: boolean
  isValidJwt: boolean
  version: string
}
