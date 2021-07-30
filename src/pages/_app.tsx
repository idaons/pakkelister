import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../normalize";
import { useRouter } from "next/router";
import GlobalStyles from "../GlobalStyles";

const home = `$/?urlParams`;

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
      </Head>
      <GlobalStyles />
      Debug 8
      <Component {...pageProps} />
    </>
  );
}

export default App;
