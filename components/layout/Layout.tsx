//UTILS
import { useContext } from 'react'

//COMPONENTS
import { CSS } from '@stitches/react'
import { Flex } from './Flex'
import Image from 'next/image'
import { LangAndDir } from '../../contexts/LangAndDir'
import { ThemeToggle } from './ThemeToggle'
import { ToggleButton } from '../form/ToggleButton'
import { Box } from './Box'

export function Layout({
  children,
  css,
}: {
  children: JSX.Element | JSX.Element[]
  css?: CSS
}) {
  //Set the lang and dir properties
  const {
    loc: { lang, dir },
  } = useContext(LangAndDir)

  return (
    <Flex
      css={{
        //Todo: some pages may require different flex box styles on the main container.
        //Thus, some of these settings should probably be made dynamic like fd, ai, and jc?? Hardcoded them for now.
        fd: 'column',
        ai: 'flex-start',
        jc: 'space-between',
        padding: '$6',
        minHeight: '100vh',
        ...css,
      }}
      lang={lang}
      dir={dir}
    >
      <ThemeToggle />
      {children}
      {/* Todo: I was trying to get this "stickied" in the bottom right corner.. it's a button to open the nave menu. Have not been able to get it to work yet. */}
      <Box css={{ position: 'relative' }}>
        <ToggleButton css={{ position: 'absolute', right: '$6', bottom: '$6' }}>
          <Image src="/logo.svg" height={50} width={50} />
        </ToggleButton>
      </Box>

      <span className="text-6xl font-bold">
        Tailwind works if this is big and bold!{' '}
      </span>
    </Flex>
  )
}
