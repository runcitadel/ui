import { Manager, Middleware } from '@runcitadel/sdk/browser/index.js'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export function getManager() {
  return new Manager(publicRuntimeConfig.MANAGER_CONNECTION_URL as string)
}

export function getMiddleware() {
  return new Middleware(publicRuntimeConfig.MIDDLEWARE_CONNECTION_URL as string)
}
