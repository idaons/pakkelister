import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles.css";
import "../normalize.css";
import { useRouter } from "next/router";

export const basepath = "/";
const home = `${basepath}?urlParams`;

// @ts-ignore
const HandleRedirect = () => {
  const firstRedirect = useRef(true);
  const router = useRouter();

  if (!firstRedirect.current) {
    router.push(home);
  }

  useEffect(() => {
    const redirect = window.localStorage.getItem("redirect");
    window.localStorage.removeItem("redirect");

    firstRedirect.current = false;

    router.replace(redirect || home);
  }, []);

  return null;
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pakkelister</title>
        <link
          href="https://www.nav.no/dekoratoren/media/favicon.ico"
          rel="icon"
          type="image/x-icon"
        />
      </Head>
      Next
      <Component {...pageProps} />
    </>
  );
}

export default App;
