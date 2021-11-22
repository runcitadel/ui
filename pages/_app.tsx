//MODELS & UTILS
import { SSRProvider } from "@react-aria/ssr";
import { useLocale } from "@react-aria/i18n";
import { useState } from "react";

//STYLES & THEME
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../styles/stitches.config";
import "../styles/reset.css";

//COMPONENTS
import Head from "next/head";
import Lock from "../components/layout/Lock";

//MODELS
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  let { locale, direction } = useLocale();

  //Todo: Make a request to see if the node is locked or not
  const [locked, setLocked] = useState(true);

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
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#41607D" />
      </Head>

      <SSRProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          value={{
            dark: darkTheme.className,
            light: "light",
          }}
        >
          {pageProps.protected && locked ? (
            <Lock />
          ) : (
            <Component
              {...pageProps}
              lang={locale}
              dir={direction}
              setLocked={setLocked}
            />
          )}
        </ThemeProvider>
      </SSRProvider>
    </>
  );
}
