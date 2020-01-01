import * as React from "react";
import { HTMLProps, InputHTMLAttributes, useRef } from "react";
import { guid } from "../guid";
import Input, { InputProps } from "./Input";

function Radio(props: InputProps) {
  return <Input type="radio" {...props} />;
}

export default Radio;
