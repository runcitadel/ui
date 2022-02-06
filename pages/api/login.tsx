//UTILS
import { getManager } from '../../lib/getCitadel'
import { getIntl } from '../../lib/getIntl'
import { getLocale } from '../../lib/getLocale'
import { isTotpEnabled } from '../../lib/getDataSources'
import { withSessionRoute } from '../../lib/withSession'

//MODELS
import type { NextApiRequest, NextApiResponse } from 'next'

export default withSessionRoute(Login)

async function Login(req: NextApiRequest, res: NextApiResponse) {
  const citadelManager = getManager()

  return citadelManager.auth
    .login(req.body.password, req.body.totpToken)
    .then((jwt: string) => {
      //Update jwt in session
      req.session.jwt = jwt
      return req.session.save()
    })
    .then(() => res.status(200).json({}))
    .catch((err) => {
      console.log(err, 'err')
      req.session.jwt = ''
      req.session
        .save()
        .then(() => isTotpEnabled(citadelManager))
        .then((isTotpEnabled) => {
          const intl = getIntl(getLocale(req))
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
          console.error(err, 'utoh')
          res.status(500).json({ message: 'Internal Server Error' })
        })
    })
}
