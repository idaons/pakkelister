import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const buttonStyles = css`
  border: 0.2rem white solid;
  background-color: transparent;
  color: white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow:
      0 0 0 0.1rem #333,
      0 0 0 0.3rem white;
  }
`;

const Style = styled.button`
  ${buttonStyles}
`;

const Button = (props: Props) => <Style {...props} />;

export default Button;
