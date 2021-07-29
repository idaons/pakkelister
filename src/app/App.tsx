import * as React from "react";
import LagListe from "../lagListe/LagListe";
import Pakk from "../pakk/Pakk";
import { Redirect, Router } from "@reach/router";
import { useRef } from "react";
import GlobalStyles from "./GlobalStyles";

export const basepath = "/pakkelister";
const home = `${basepath}/urlParams`;

const HandleRedirect = (props: { default: boolean }) => {
  const firstRedirect = useRef(true);

  if (!firstRedirect.current) {
    window.location.pathname = home;
  }

  const redirect = window.localStorage.getItem("redirect");
  window.localStorage.removeItem("redirect");

  firstRedirect.current = false;

  return <Redirect noThrow from={"/"} to={redirect || home} />;
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <LagListe path={basepath + "/:urlValg"} />
        <Pakk path={basepath + "/pakk/:urlValg"} />
        <HandleRedirect default />
      </Router>
    </>
  );
}

export default App;
