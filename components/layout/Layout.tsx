//UTILS
import { ReactElement } from 'react'
import { useLocale } from '@react-aria/i18n'

//COMPONENTS
import { Flex } from './Flex'
import { ThemeToggle } from './ThemeToggle'
import { CSS } from '@stitches/react'

export function Layout({
  children,
  css,
}: {
  children: JSX.Element | JSX.Element[]
  css?: CSS
}) {
  const { locale, direction } = useLocale()

  return (
    <Flex
      css={{
        flexDirection: 'column',
        ai: 'flex-start',
        jc: 'space-between',
        padding: '$6',
        minHeight: '100vh',
        ...css,
      }}
      lang={locale}
      dir={direction}
    >
      <ThemeToggle />
      {/* Todo: Wrap children in layout components.. already added theme toggle, but add navigation, etc */}
      {children}
    </Flex>
  )
}
