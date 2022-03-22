//UTILS
import { getApiUtils } from '../../../lib/getApiUtils'
import { getManager } from '../../../lib/getCitadel'
import { logEvent } from '../../../lib/logEvent'
import { isTotpEnabled } from '../../../lib/getDataSources'
import { withSessionRoute } from '../../../lib/withSession'

//MODELS
import type { NextApiRequest, NextApiResponse } from 'next'

export default withSessionRoute(SetupTotp)

async function SetupTotp(req: NextApiRequest, res: NextApiResponse) {
	const { intl, manager } = getApiUtils(req)

	return isTotpEnabled(manager).then((isTotpEnabled) => {
		if (isTotpEnabled) {
			logEvent({
				req,
				type: 'error',
				message: "Request to set up totp/2fa, but it's already set up",
			})
			return res.status(500).json({
				message: intl.formatMessage({
					id: 'api.setupTotp.alreadySetup',
					description: 'Request to set up totp/2fa, but it was already set up',
					defaultMessage: 'Two-factor authentication already set up',
				}),
			})
		} else {
			return manager.auth
				.setupTotp()
				.then((totpKey: string) => {
					logEvent({ req, type: 'success', message: 'Setting up totp/2fa' })
					res.status(200).json({ totpKey })
				})
				.catch((err) => {
					logEvent({ req, err, type: 'error', message: 'Setting up totp/2fa' })
					res.status(500).json({
						message: intl.formatMessage({
							id: 'api.internalServerError',
							description: 'An unknown error occurred, sanitized error message',
							defaultMessage: 'Internal Server Error',
						}),
					})
				})
		}
	})
}
