//UTILS
import { getApiUtils } from '../../../lib/getApiUtils'
import { logEvent } from '../../../lib/logEvent'
import { isRegistered } from '../../../lib/getDataSources'
import { withSessionRoute } from '../../../lib/withSession'

//MODELS
import type { NextApiRequest, NextApiResponse } from 'next'

export default withSessionRoute(Register)

async function Register(req: NextApiRequest, res: NextApiResponse) {
	//Todo: we probably need additional validations on the body parameters?
	//Right now we are naively just making sure they exist
	const { name, password, seed } = req.body
	const { intl, manager } = getApiUtils(req)

	if (!password) {
		logEvent({
			message: `Request to register, but no password provided`,
			req,
			type: 'error',
		})
		return res.status(401).json({
			message: intl.formatMessage({
				id: 'api.noPasswordProvided',
				description: 'No password provided',
				defaultMessage: 'No password provided',
			}),
		})
	}

	if (!name) {
		logEvent({
			message: `Request to register, but no name provided`,
			req,
			type: 'error',
		})
		return res.status(401).json({
			message: intl.formatMessage({
				id: 'api.register.noNameProvided',
				description: 'Request to register, but no name provided',
				defaultMessage: 'No name provided',
			}),
		})
	}

	if (!seed) {
		logEvent({
			message: `Request to register, but no seed provided`,
			req,
			type: 'error',
		})
		return res.status(401).json({
			message: intl.formatMessage({
				id: 'api.register.noSeedProvided',
				description: 'Request to register, but no seed provided',
				defaultMessage: 'No seed provided',
			}),
		})
	}

	return isRegistered(manager).then((isRegistered) => {
		if (isRegistered) {
			logEvent({
				message: `Request to register, but user already registered`,
				req,
				type: 'error',
			})
			return res.status(401).json({
				message: intl.formatMessage({
					id: 'api.register.userAlreadyRegistered',
					description: 'Request to register, but user already registered',
					defaultMessage: 'User already registered',
				}),
			})
		} else {
			return manager.auth
				.register(name, password, seed)
				.then((jwt) => {
					logEvent({
						message: `User successfully registered`,
						req,
						type: 'success',
					})
					req.session.jwt = jwt
					return req.session.save()
				})
				.then(() => res.status(200).send({}))
				.catch((err) => {
					//Todo: What kind of different errors could occur here?
					//Catch each individually and send back different error messages
					logEvent({
						err,
						message: `Request to register, but there was an error registering a new user`,
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
	})
}
