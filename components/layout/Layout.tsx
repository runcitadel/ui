//UTILS
import { ReactElement, useContext } from 'react'
import { useLocale } from '@react-aria/i18n'

//COMPONENTS
import { Flex } from './Flex'
import { ThemeToggle } from './ThemeToggle'
import { CSS } from '@stitches/react'
import { LangAndDir } from '../../contexts/LangAndDir'

export function Layout({
  children,
  css,
}: {
  children: JSX.Element | JSX.Element[]
  css?: CSS
}) {
  const {
    actualLoc: { lang, dir },
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
    </Flex>
  )
}
