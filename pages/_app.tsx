//PROVIDERS
import { SSRProvider } from "@react-aria/ssr";
import { ThemeProvider } from "next-themes";

//STYLES
import { darkTheme } from "../styles/stitches.config";
import "../styles/reset.css";

//COMPONENTS
import Head from "next/head";

//MODELS
import { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import { Citadel } from "../lib/Citadel";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps, "pageProps");
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
          <Layout protectedRoute={pageProps.protected}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SSRProvider>
    </>
  );
}
