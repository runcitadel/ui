import { NextApiRequest, NextApiResponse } from 'next'
import { Citadel } from '../../lib/Citadel'

console.log(Citadel, 'Citadel..')

export default async function isCitadel(req: NextApiRequest, res: NextApiResponse) {
	try {
		const result = await Citadel.isCitadel()
		res.status(200).json({ result })
	} catch (err) {
		console.error(err, req.headers, 'Error w/headers in isCitadel()')
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
