import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles.css";
import NyListe from "./nyListe/NyListe";

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    return (
        <>
            <NyListe />
        </>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="pakkeliste" />, mountNode);