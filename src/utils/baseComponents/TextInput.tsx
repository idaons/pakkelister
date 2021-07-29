import * as React from "react";
import { InputHTMLAttributes, useRef } from "react";
import { guid } from "../guid";
import styled from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const Style = styled.div`
  display: flex;
  flex-direction: column;

  input {
    line-height: 1.3rem;
    max-width: 30rem;
    background-color: inherit;
    color: inherit;
    border: currentColor solid;
    padding: 0.5em 0.75em;
    border-radius: 0.25em;
  }

  label {
    margin-bottom: 0.5rem;
  }
`;

function TextInput(props: InputProps) {
  const ref = useRef(guid());
  const { label, className, ...rest } = props;

  return (
    <Style className={className}>
      <label htmlFor={ref.current}>{label}</label>
      <input type="text" id={ref.current} {...rest} />
    </Style>
  );
}

export default TextInput;
