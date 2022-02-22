import { NextApiRequest } from 'next'

export function getLocale(req: NextApiRequest) {
  return req.headers['accept-language']?.split(',')?.[0].split('-')[0] || 'en-US'
}
