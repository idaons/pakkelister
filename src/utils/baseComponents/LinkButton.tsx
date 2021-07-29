import * as React from "react";
import { Link } from "@reach/router";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { buttonStyles } from "./Button";

interface Props extends HTMLAttributes<HTMLLinkElement> {
  children: string;
  to: string;
  className?: string;
  style?: React.CSSProperties;
}

const StyledLink = styled(Link)`
  margin: 1rem 0;
  text-decoration: none;
  ${buttonStyles};
`;

function LinkButton(props: Props) {
  const { children, className, style, to } = props;
  return (
    <StyledLink to={to} className={className} style={style}>
      {children}
    </StyledLink>
  );
}

export default LinkButton;
