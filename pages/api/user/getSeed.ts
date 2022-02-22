//UTILS
import { getApiUtils } from '../../../lib/getApiUtils'
import { isRegistered } from '../../../lib/getDataSources'
import { logEvent } from '../../../lib/logEvent'
import { withSessionRoute } from '../../../lib/withSession'

//MODELS
import type { NextApiRequest, NextApiResponse } from 'next'

export default withSessionRoute(GetSeed)

async function GetSeed(req: NextApiRequest, res: NextApiResponse) {
  const { password } = req.body
  const { intl, manager, middleware } = getApiUtils(req)

  //Todo: do we need any additional validations on this body parameter?
  if (!password) {
    logEvent({
      message: `Request to get seed, but no password provided`,
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

  return isRegistered(manager).then((isRegistered) => {
    if (isRegistered) {
      return manager.auth
        .seed(password)
        .then((seed) => {
          logEvent({
            message: `Successful request for the seed of an existing user`,
            req,
            type: 'success',
          })
          res.status(200).send({ seed })
        })
        .catch((err) => {
          //Todo: what does an invalid password error look like?
          //Catch it and send back a different error message for that
          logEvent({
            err,
            message: `Error getting seed of an already registered user`,
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
    } else {
      return middleware.lnd.wallet
        .generateSeed()
        .then((seed) => {
          logEvent({
            message: `Generated a new seed for a new user`,
            req,
            type: 'success',
          })
          res.status(200).send({ seed })
        })
        .catch((err) => {
          logEvent({
            err,
            message: `Error generating a new seed for an unregistered user`,
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
