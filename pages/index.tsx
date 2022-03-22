//UTILS
import { getInitStateAndAuth } from '../lib/getInitStateAndAuth'
import { withSessionSsr } from '../lib/withSession'

//COMPONENTS
import { Box } from '../components/layout/Box'
import { Layout } from '../components/layout/Layout'

//MODELS
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = withSessionSsr(async (context) => {
	return await getInitStateAndAuth(context, { protectedRoute: true })
})

type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>

// This will be the "landing page" or "dashboard page" after the user logs in
export default function Index(props: ServerSideProps) {
	return (
		<Layout {...props}>
			<Box>Dashboard..</Box>
		</Layout>
	)
}
