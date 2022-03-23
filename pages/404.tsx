//COMPONENTS
import { Button } from '../components/form/Button'
import { Flex } from '../components/layout/Flex'
import { Link } from '../components/typography/Link'
import { Text } from '../components/typography/Text'

export default function Custom404() {
	return (
		<>
			<Flex
				css={{
					fd: 'column',
					flexGrow: 3,
					jc: 'center',
					ai: 'center',
				}}
			>
				<Text size="lg">404</Text>
				<Text size="lg">I have no idea where I am...</Text>
				<Link href="/">
					<Button>Go Home</Button>
				</Link>
			</Flex>
		</>
	)
}