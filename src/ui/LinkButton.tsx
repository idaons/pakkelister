import * as React from "react";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { buttonStyles } from "./Button";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLLinkElement> {
  children: string;
  href: string;
  className?: string;
}

const StyledLink = styled(Link)`
  margin: 1rem 0;
  text-decoration: none;
  ${buttonStyles};
`;

function LinkButton(props: Props) {
  const { children, className, href } = props;
  return (
    <StyledLink className={className} href={href}>
      {children}
    </StyledLink>
  );
}

export default LinkButton;
