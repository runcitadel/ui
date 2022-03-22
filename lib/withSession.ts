//UTILS
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'

//MODELS
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from 'next'

const sessionOptions = {
	password: process.env.SESSION_PASSWORD as string,
	cookieName: 'citadel',
	cookieOptions: {
		// Todo: instead of toggling this on in production, we need to check if HTTPS has been configured or not
		// secure: process.env.NODE_ENV === 'production', // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
		maxAge: undefined,
	},
}

//Wrapper for API routes
export function withSessionRoute(handler: NextApiHandler) {
	return withIronSessionApiRoute(handler, sessionOptions)
}

//Wrapper for getServerSideProps
// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSessionSsr<P extends { [key: string]: unknown } = { [key: string]: unknown }>(
	handler: (context: GetServerSidePropsContext) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
	return withIronSessionSsr(handler, sessionOptions)
}

//Define the type of req.session.*
declare module 'iron-session' {
	interface IronSessionData {
		jwt: string
	}
}
