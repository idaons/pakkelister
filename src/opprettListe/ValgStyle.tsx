import * as React from "react";
import { ReactNode } from "react";
import { InputGruppe, Valggruppe } from "../pages";
import styled from "styled-components";

const StyledH2 = styled.h2`
  margin-bottom: 1rem !important;
`;

interface Props {
  name: string;
  children: ReactNode;
}

function ValgStyle(props: Props) {
  return (
    <Valggruppe>
      <StyledH2>{props.name}</StyledH2>
      <InputGruppe>{props.children}</InputGruppe>
    </Valggruppe>
  );
}

export default ValgStyle;
