//UTILS
import { getApiUtils } from '../../../lib/getApiUtils'
import { isTotpEnabled } from '../../../lib/getDataSources'
import { logEvent } from '../../../lib/logEvent'
import { withSessionRoute } from '../../../lib/withSession'

//MODELS
import type { NextApiRequest, NextApiResponse } from 'next'

export default withSessionRoute(Login)

async function Login(req: NextApiRequest, res: NextApiResponse) {
  const { intl, manager } = getApiUtils(req)
  //Todo: we should probably perform more validations on these body parameters?
  const { password, totpToken } = req.body

  return manager.auth
    .login(password, totpToken)
    .then((jwt: string) => {
      req.session.jwt = jwt
      return req.session.save()
    })
    .then(() => res.status(200).json({}))
    .catch(() => {
      logEvent({
        message: `Failed login attempt`,
        req,
        type: 'error',
      })
      req.session.jwt = ''
      req.session
        .save()
        .then(() => isTotpEnabled(manager))
        .then((isTotpEnabled) => {
          return res.status(401).json({
            message: isTotpEnabled
              ? intl.formatMessage({
                  id: 'api.login.invalidPass',
                  description: 'Invalid password error message',
                  defaultMessage: 'Invalid password',
                })
              : intl.formatMessage({
                  id: 'api.login.invalidPassOr2fa',
                  description: 'Invalid password or 2fa token error message',
                  defaultMessage: 'Invalid password or 2fa token',
                }),
          })
        })
        .catch((err) => {
          logEvent({
            err,
            message: `Error updating session or translating error message after failed login attempt`,
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
    })
}
