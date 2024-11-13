import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/normalize";
import GlobalStyles from "../styles/GlobalStyles";
import { Exo } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const exo = Exo({ weight: ["400", "600"], subsets: ["latin"] });
function App({ Component, pageProps }: AppProps) {
  return (
    <main className={exo.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pakkelister</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  );
}

export default App;
