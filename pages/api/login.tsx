//UTILS
import { getCitadel } from '../../lib/getCitadel'
import { withSessionRoute } from '../../lib/withSession'

//MODELS
import type { NextApiRequest, NextApiResponse } from 'next'
import { isTotpEnabled } from '../../lib/getDataSources'

export default withSessionRoute(Login)

async function Login(req: NextApiRequest, res: NextApiResponse) {
  const citadelInstance = getCitadel()

  return citadelInstance
    .login(req.body.password, req.body.totpToken)
    .then(() => {
      //Update jwt in session
      req.session.jwt = citadelInstance.jwt
      return req.session.save()
    })
    .then(() => res.status(200).json({}))
    .catch(() => {
      //Update jwt in session
      req.session.jwt = citadelInstance.jwt
      req.session
        .save()
        .then(() => isTotpEnabled(citadelInstance))
        .then((isTotpEnabled) =>
          res.status(401).json({
            message: `Invalid password${isTotpEnabled ? ' or 2fa token' : ''}`,
          })
        )
        .catch(() => res.status(500).json({ message: 'Internal Server Error' }))
    })
}
