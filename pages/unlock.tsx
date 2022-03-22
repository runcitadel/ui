//UTILS
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { getInitStateAndAuth } from '../lib/getInitStateAndAuth'
import { withSessionSsr } from '../lib/withSession'

//COMPONENTS
import { Box } from '../components/layout/Box'
import { Button } from '../components/form/Button'
import { Flex } from '../components/layout/Flex'
import { FormattedMessage } from 'react-intl'
import Image from 'next/image'
import { Layout } from '../components/layout/Layout'
import { Text } from '../components/typography/Text'
import { TextField } from '../components/form/TextField'

//MODELS
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

//CONTEXTS
import { LangAndDir } from '../contexts/LangAndDir'

export const getServerSideProps: GetServerSideProps = withSessionSsr(async (context) => {
	return await getInitStateAndAuth(context, { dataSources: ['isTotpEnabled'] })
})

type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Unlock(props: ServerSideProps) {
	const { isTotpEnabled } = props
	const router = useRouter()
	const { loc } = useContext(LangAndDir)
	const [password, setPassword] = useState('')
	const [totpToken, setTotpToken] = useState('')

	const submissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		fetch('/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Todo: depending on what language is selected, the accept-language should be altered on each request
				//Toastr messages must be translated at the request level
				'Accept-Language': loc.lang,
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
		<Layout {...props}>
			<Flex
				as="form"
				css={{
					fd: 'column',
					ai: 'center',
					jc: 'center',
				}}
				onSubmit={submissionHandler}
			>
				<Box css={{ textAlign: 'center' }}>
					<Image src="/logo.svg" height={200} width={200} />
					<Flex css={{ jc: 'center' }}>
						<Box css={{ maxWidth: '95%' }}>
							<TextField
								centerLabel
								label={
									<FormattedMessage
										id="unlock.passwordInputLabel"
										description="Login password input field label"
										defaultMessage="Password"
									/>
								}
								required={true}
								showErrors={false}
								type="password"
								value={password}
								onChange={setPassword}
							/>
						</Box>
					</Flex>
					{isTotpEnabled && (
						<TextField
							autoComplete="off"
							centerLabel
							label={
								<FormattedMessage
									id="unlock.twoFactorAuthLabel"
									description="Two-factor authentication token input label"
									defaultMessage="Two-factor Authentication Token"
								/>
							}
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
						<FormattedMessage
							id="unlock.loginFormSubmitButtonText"
							description="Login/unlock form button text"
							defaultMessage="Unlock"
						/>
					</Button>
				</Box>
			</Flex>
			<Flex css={{ fd: 'column', ai: 'flex-start' }}>
				<Text size="lg">Citadel</Text>
				<Text>v0.0.1-alpha</Text>
				<Button filled="success" size="sm">
					<FormattedMessage
						id="unlock.updateAvailableNotification"
						description="Update available button text"
						defaultMessage="Update Available"
					/>
				</Button>
			</Flex>
		</Layout>
	)
}
