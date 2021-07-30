import * as React from "react";
import { ReactNode } from "react";
import { InputGruppe, Valggruppe } from "../../pages";

interface Props {
  name: string;
  children: ReactNode;
}

function ValgStyle(props: Props) {
  return (
    <Valggruppe>
      <h2>{props.name}</h2>
      <InputGruppe>{props.children}</InputGruppe>
    </Valggruppe>
  );
}

export default ValgStyle;
