import * as React from "react";
import { InputHTMLAttributes, useId } from "react";
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
  const id = useId();
  const { label, className, ...rest } = props;

  return (
    <Style className={className}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...rest} />
    </Style>
  );
}

export default TextInput;
