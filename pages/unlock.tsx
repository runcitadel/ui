//UTILS
import { initStateAndAuth } from '../lib/initStateAndAuth'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { withSessionSsr } from '../lib/withSession'

//COMPONENTS
import { Box } from '../components/layout/Box'
import { Button } from '../components/form/Button'
import { Flex } from '../components/layout/Flex'
import Image from 'next/image'
import { Layout } from '../components/layout/Layout'
import { Text } from '../components/typography/Text'
import { TextField } from '../components/form/TextField'

//MODELS
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = withSessionSsr(
  async (context) => {
    return await initStateAndAuth(context, { dataSources: ['isTotpEnabled'] })
  }
)

type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Unlock(props: ServerSideProps) {
  const { isTotpEnabled } = props
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [totpToken, setTotpToken] = useState('')

  const submissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, totpToken }),
    })
      .then(() => router.push('/'))
      .catch((err) => {
        //Todo: show error modal
        console.error(err)
      })
  }

  return (
    <Layout css={{}}>
      <Flex
        as="form"
        css={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onSubmit={submissionHandler}
      >
        <Box css={{ textAlign: 'center' }}>
          <Image src="/logo.svg" height={200} width={200} />
          <TextField
            centerLabel
            label="Password"
            required={true}
            showErrors={false}
            type="password"
            value={password}
            onChange={setPassword}
          />
          {isTotpEnabled && (
            <TextField
              autoComplete="off"
              centerLabel
              label="Two-Factor Authentication"
              onChange={setTotpToken}
              required={true}
              showErrors={false}
              type="text"
              value={totpToken}
            />
          )}
          <Button
            css={{
              mt: '$5',
            }}
            filled="primary"
            type="submit"
          >
            Unlock
          </Button>
        </Box>
      </Flex>
      <Flex css={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text size="lg">Citadel</Text>
        <Text>v0.0.1-alpha</Text>
        <Button filled="success" size="sm">
          Update Available
        </Button>
      </Flex>
    </Layout>
  )
}
