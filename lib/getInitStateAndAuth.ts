//UTILS
import { getManager, getMiddleware } from './getCitadel'
import * as dataSourceGetters from './getDataSources'

//MODELS
import { DataSource } from '../models/DataSource'
import Error from 'next/error'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

/* A helper to be used inside getServerSideProps:
  - Serves as an auth guard
  - Retrieves applicable data needed for each page
*/
export const getInitStateAndAuth = async (
  context: GetServerSidePropsContext,
  {
    dataSources = [],
    protectedRoute = true,
    props = {},
  }: {
    dataSources?: DataSource[]
    protectedRoute?: boolean
    props?: Record<string, any>
  }
): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  const { req } = context

  //Create a Citadel Manager and Middleware instance, and set the jwt if it exists on req.session
  const citadelManager = getManager()
  const citadelMiddleware = getMiddleware()
  if (req.session.jwt) {
    citadelManager.jwt = req.session.jwt
    citadelMiddleware.jwt = req.session.jwt
  }

  return new Promise((resolve) => {
    citadelManager.auth
      .isRegistered()
      .then((isRegistered: boolean) => {
        //Ensure the user is not on an invalid route (in terms of the Citadel's current state)
        //IE. On register screen when already registered, or on any other route than /setup when not registered
        if (!isRegistered && context.resolvedUrl !== '/setup') {
          resolve({
            redirect: {
              destination: '/setup',
              permanent: false,
            },
          })
        } else if (isRegistered && context.resolvedUrl === '/setup') {
          resolve({
            redirect: {
              destination: '/',
              permanent: false,
            },
          })
        } else {
          //We proceed here to make a couple more auth guard validations
          //Involving invalid jwt acceccing a protected route, and a valid jwt accessing the unlock route
          citadelManager.auth.test().then(async (isValidJwt: boolean) => {
            if (!isValidJwt) {
              //Update session if jwt is no longer valid
              req.session.jwt = ''
              await req.session.save()
            }

            if (!isValidJwt && protectedRoute && context.resolvedUrl !== '/unlock') {
              resolve({
                redirect: {
                  destination: '/unlock',
                  permanent: false,
                },
              })
            } else if (isValidJwt && context.resolvedUrl === '/unlock') {
              resolve({
                redirect: {
                  destination: '/',
                  permanent: false,
                },
              })
            } else {
              //By now all auth guard checks have passed!
              //Now we use data source getters, and the data sources defined in getInitStateAndAuth's config to get any data this route needs when rendered
              Promise.all(
                dataSources.map<any>((dataSource: DataSource) =>
                  dataSourceGetters[dataSource](citadelManager, citadelMiddleware)
                )
              )
                .then((state) => {
                  resolve({
                    props: {
                      ...props,
                      state: state.reduce(
                        (previousValue, currentValue, index) => ({
                          ...previousValue,
                          [dataSources[index]]: currentValue,
                        }),
                        {}
                      ),
                    },
                  })
                })
                .catch((err) => {
                  //Todo: pass this error to pageProps, look for errors in _app, and throw toaster notification
                  console.error(err, 'err in getServerSideProps..')
                  resolve({
                    props: {
                      ...props,
                      state: null,
                      error: 'There was an issue communicating with your Citadel.',
                    },
                  })
                })
            }
          })
        }
      })
      .catch((err: Error) => {
        //Todo: pass this error to pageProps, look for errors in _app, and throw toaster notification
        console.error(err, 'err in getServerSideProps..')
        resolve({
          props: {
            ...props,
            state: null,
            error: 'There was an issue communicating with your Citadel.',
          },
        })
      })
  })
}
