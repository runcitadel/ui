import { LogEvent } from '../models/LogEvent'
import { getLocale } from './getLocale'

export const logEvent = ({ req, err, type, message }: LogEvent) => {
  console.log(
    err,
    `\n\n${new Date().toLocaleString(getLocale(req))}\t${type}\t${req.method}\t${
      req.url
    }\t`,
    message,
    '\n\n'
  )
  return { type, message }
}
