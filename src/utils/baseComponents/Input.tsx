import * as React from "react";
import { InputHTMLAttributes, useRef } from "react";
import { guid } from "../guid";
import classes from "./input.less";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input(props: InputProps) {
  const ref = useRef(guid());
  const { label, ...rest } = props;
  return (
    <div className={classes.input}>
      <label htmlFor={ref.current}>{label}</label>
      <input id={ref.current} {...rest} />
    </div>
  );
}

export default Input;
