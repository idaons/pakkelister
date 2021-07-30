import * as React from "react";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { buttonStyles } from "./Button";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLLinkElement> {
  children: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

const StyledLink = styled.a`
  margin: 1rem 0;
  text-decoration: none;
  ${buttonStyles};
`;

function LinkButton(props: Props) {
  const { children, className, style, href } = props;
  return (
    <Link href={href} passHref>
      <StyledLink className={className} style={style}>
        {children}
      </StyledLink>
    </Link>
  );
}

export default LinkButton;
