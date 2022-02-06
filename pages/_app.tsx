//UTILS
import { useLocale } from '@react-aria/i18n'
import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { isRTL } from '../lib/isRTL'

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
import { Loc } from '../models/Loc'

//LANGUAGES
import English from '../content/compiled-locales/en.json'
import German from '../content/compiled-locales/de.json'

//@axe-core/react tests the accessibility of the rendered DOM, and logs any issues to the developer console
//It should be disabled in production to optimize performance
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}

export default function App({ Component, pageProps }: AppProps) {
  //Use react-aria to get the user's browser defaults, but use Context and useState to allow the language to be changed
  const { locale: localeTemp, direction: directionTemp } = useLocale()
  const [messages, setMessages] = useState(English)

  //Use React.useState to store the chosen language
  //This can be leveraged to allow the user to choose the language they prefer and override the Browser's default language
  const [loc, setLoc] = useState<Loc>({
    lang: localeTemp.split('-')[0],
    dir: directionTemp as DirectionSetting,
  })

  useMemo(() => {
    //Determine which language messages need to be used
    switch (loc.lang) {
      case 'de':
        setMessages(German)
        break
      default:
        setMessages(English)
    }

    //Determine if the language is RTL
    setLoc({ ...loc, lang: isRTL(loc.lang) ? 'rtl' : 'ltr' })
  }, [loc.lang])

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
          {/* react-aria does not export the context it uses for I18nProvider which is the reason for the LangAndDir context*/}
          <I18nProvider locale={loc.lang}>
            <LangAndDir.Provider value={{ loc, setLoc }}>
              <IntlProvider locale={loc.lang} messages={messages}>
                <Component {...pageProps} />
              </IntlProvider>
            </LangAndDir.Provider>
          </I18nProvider>
        </ThemeProvider>
      </SSRProvider>
    </>
  )
}
