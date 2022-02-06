import { Manager, Middleware } from '@runcitadel/sdk/browser/index.js'

export const ping = (citadelManager: Manager) => citadelManager.ping()
export const isOnline = (citadelManager: Manager, citadelMiddleware: Middleware) =>
  Promise.all([citadelManager.isOnline(), citadelMiddleware.isOnline()]).then(
    (res) => res.every((isOnline) => isOnline)
  )
export const isTotpEnabled = (citadelManager: Manager) =>
  citadelManager.auth.isTotpEnabled()
