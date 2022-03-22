import { getIntl } from './getIntl'
import { getLocale } from './getLocale'
import { getManager, getMiddleware } from './getCitadel'
import { NextApiRequest } from 'next'

export const getApiUtils = (req: NextApiRequest) => {
	const locale = getLocale(req)
	const intl = getIntl(locale)
	const manager = getManager()
	const middleware = getMiddleware()
	return {
		locale,
		intl,
		manager,
		middleware,
	}
}
