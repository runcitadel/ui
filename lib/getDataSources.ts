import { Manager, Middleware } from '@runcitadel/sdk/browser/index.js'

export const getInfo = (manager: Manager) => manager.auth.info()
export const isOnline = (manager: Manager, middleware: Middleware) =>
	Promise.all([manager.isOnline(), middleware.isOnline()]).then((res) => res.every((isOnline) => isOnline))
export const isRegistered = (manager: Manager) => manager.auth.isRegistered()
export const isTotpEnabled = (manager: Manager) => manager.auth.isTotpEnabled()
export const ping = (manager: Manager) => manager.ping()
