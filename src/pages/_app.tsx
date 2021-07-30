import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../normalize";
import { useRouter } from "next/router";
import GlobalStyles from "../GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pakkelister</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
