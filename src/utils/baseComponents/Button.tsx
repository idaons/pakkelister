import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import classes from "./button.less";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

function Button(props: Props) {
  const { children, ...rest } = props;
  return (
    <button {...rest} className={classes.button}>
      {children}
    </button>
  );
}

export default Button;
