import { NextApiRequest } from 'next'

export interface LogEvent {
  req: NextApiRequest
  err?: Error
  type: 'error' | 'success' | 'info'
  message: string
}
