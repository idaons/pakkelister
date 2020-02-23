import * as React from "react";
import InputBase, { InputProps } from "./InputBase";

function Radio(props: InputProps) {
  return <InputBase type="radio" {...props} />;
}

export default Radio;
