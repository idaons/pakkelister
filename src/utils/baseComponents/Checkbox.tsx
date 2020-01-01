import * as React from "react";
import { HTMLProps, InputHTMLAttributes, useRef } from "react";
import { guid } from "../guid";
import Input, { InputProps } from "./Input";

function Checkbox(props: InputProps) {
  return <Input type="checkbox" {...props} />;
}

export default Checkbox;
