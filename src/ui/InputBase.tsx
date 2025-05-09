import * as React from "react";
import { InputHTMLAttributes, useId } from "react";
import styled, { css } from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  strikeThrough?: boolean;
  header?: boolean;
}

const Style = styled.div<{ $strikeThrough?: boolean; $header?: boolean }>`
  display: inline-block;
  label {
    padding-left: 0.5rem;
    font-size: 1.2rem;
  }

  input {
    position: relative;
    top: -0.15rem;
    transform: scale(1.2);
  }

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  ${(p) =>
    p.$strikeThrough &&
    css`
      input:checked + label {
        text-decoration: line-through;
        color: rgba(136, 136, 136, 0.98);
      }
    `}

  ${(p) =>
    p.$header &&
    css`
      input {
        transform: scale(1.7);
      }
      label {
        padding-left: 1em;
      }
      h2 {
        display: inline-block;
      }
    `}
`;

function InputBase(props: InputProps) {
  const id = useId();
  const { label, strikeThrough, header, className, ...rest } = props;

  return (
    <Style
      $strikeThrough={strikeThrough}
      $header={header}
      className={className}
    >
      <input id={id} {...rest} />
      <label htmlFor={id}>{props.header ? <h2>{label}</h2> : label}</label>
    </Style>
  );
}

export default InputBase;
