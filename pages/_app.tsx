//UTILS
import { useLocale } from '@react-aria/i18n'
import { useMemo, useState } from 'react'

//PROVIDERS
import { SSRProvider } from '@react-aria/ssr'
import { ThemeProvider } from 'next-themes'
import { I18nProvider } from '@react-aria/i18n'
import { IntlProvider } from 'react-intl'
import { LangAndDir } from '../contexts/LangAndDir'

//STYLES
import { darkTheme } from '../styles/stitches.config'
import '../styles/reset.css'
import '../styles/globals.css'

//COMPONENTS
import Head from 'next/head'

//MODELS
import { AppProps } from 'next/app'
import { ActualLoc } from '../models/ActualLoc'

//LANGUAGES
import English from '../content/compiled-locales/en.json'
import German from '../content/compiled-locales/de.json'

export default function App({ Component, pageProps }: AppProps) {
  //Use react-aria to get the user's browser defaults, but use Context and useState to allow the language to be changed
  const { locale: localeTemp, direction: directionTemp } = useLocale()

  //Use React.useState to store the chosen language. This can be leveraged to allow the user to choos the language used
  const [actualLoc, setActualLoc] = useState<ActualLoc>({
    lang: localeTemp.split('-')[0],
    dir: directionTemp as DirectionSetting,
  })

  //Determine which messages need to be used
  const messages = useMemo(() => {
    switch (actualLoc.lang) {
      case 'en':
        return English
      case 'de':
        return German
    }
  }, [actualLoc])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Citadel Node" />
        <meta name="keywords" content="Bitcoin, Lightning" />
        <title>Citadel</title>

        {/*  Todo: Updated all meta tags, icons, etc  */}
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#41607D" />
      </Head>

      <SSRProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          value={{
            dark: darkTheme.className,
            light: 'light',
          }}
        >
          <I18nProvider locale={actualLoc.lang}>
            <LangAndDir.Provider value={{ actualLoc, setActualLoc }}>
              <IntlProvider locale={actualLoc.lang} messages={messages}>
                <Component {...pageProps} />
              </IntlProvider>
            </LangAndDir.Provider>
          </I18nProvider>
        </ThemeProvider>
      </SSRProvider>
    </>
  )
}
