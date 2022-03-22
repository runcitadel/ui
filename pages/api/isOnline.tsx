import { NextApiRequest, NextApiResponse } from 'next'
import { Citadel } from '../../lib/Citadel'

export default async function isOnline(req: NextApiRequest, res: NextApiResponse) {
	try {
		const result = await Citadel.isOnline()
		res.status(200).json({ result })
	} catch (err) {
		console.error(err, req.headers, 'Error w/headers in isOnline()')
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
