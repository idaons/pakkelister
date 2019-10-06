import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles.css";

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="pakkeliste" />, mountNode);