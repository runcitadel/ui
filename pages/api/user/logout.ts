//UTILS
import { getApiUtils } from '../../../lib/getApiUtils'
import { isTotpEnabled } from '../../../lib/getDataSources'
import { logEvent } from '../../../lib/logEvent'
import { withSessionRoute } from '../../../lib/withSession'

//MODELS
import type { NextApiRequest, NextApiResponse } from 'next'

export default withSessionRoute(Login)

async function Login(req: NextApiRequest, res: NextApiResponse) {
	const { intl } = getApiUtils(req)
	req.session.jwt = ''
	return req.session
		.save()
		.then(() => {
			logEvent({
				message: `Successful user log out`,
				req,
				type: 'error',
			})
			return res.status(200).json({
				message: intl.formatMessage({
					id: 'api.logout.success',
					description: 'Successful user log out',
					defaultMessage: 'Successful user log out',
				}),
			})
		})
		.catch((err) => {
			logEvent({
				err,
				message: `Error during user log out`,
				req,
				type: 'error',
			})
			res.status(500).json({
				message: intl.formatMessage({
					id: 'api.internalServerError',
					description: 'An unknown error occurred, sanitized error message',
					defaultMessage: 'Internal Server Error',
				}),
			})
		})
}
