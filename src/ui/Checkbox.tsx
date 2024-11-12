import * as React from "react";
import InputBase, { InputProps } from "./InputBase";

function Checkbox(props: InputProps) {
  return <InputBase type="checkbox" {...props} />;
}

export default Checkbox;
