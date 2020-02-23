import * as React from "react";
import { HTMLProps, InputHTMLAttributes, useRef } from "react";
import { guid } from "../guid";
import InputBase, { InputProps } from "./InputBase";

function Checkbox(props: InputProps) {
  return <InputBase type="checkbox" {...props} />;
}

export default Checkbox;
