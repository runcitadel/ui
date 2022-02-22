//UTILS
import { getInitStateAndAuth } from '../lib/getInitStateAndAuth'
import { withSessionSsr } from '../lib/withSession'

//COMPONENTS
import { Button } from '../components/form/Button'
import { Flex } from '../components/layout/Flex'
import { Layout } from '../components/layout/Layout'
import { Text } from '../components/typography/Text'

//MODELS
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = withSessionSsr(
  async (context) => {
    return await getInitStateAndAuth(context, {})
  }
)

type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Setup(props: ServerSideProps) {
  return (
    <Layout {...props}>
      <Text as="h1" css={{ mb: '$10' }}>
        Todo: Create Setup Wizard
      </Text>
      <Flex css={{ fd: 'column', mb: '$10' }}>
        <Text as="h3">Restore previous wallet from private key?</Text>
        <Button filled="primary">Restore</Button>
      </Flex>
      <Flex css={{ fd: 'column' }}>
        <Text as="h3">Create new wallet?</Text>
        <Button>Create</Button>
      </Flex>
    </Layout>
  )
}
