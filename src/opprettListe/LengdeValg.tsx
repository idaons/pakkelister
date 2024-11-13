import * as React from "react";
import ValgStyle from "./ValgStyle";
import Radio from "../ui/Radio";
import { IValg } from "../utils/types";

interface Props {
  lengde: number;
  setLengde: (sesong: number) => void;
}

export const maksAntallDager = 7;

export function erLangtur(valg: IValg): boolean {
  return valg.lengde >= maksAntallDager;
}

function LengdeValg(props: Props) {
  return (
    <ValgStyle name="Lengde">
      {[...new Array(maksAntallDager + 1)].map((_, index) => {
        if (index === 0) {
          return null;
        }
        return (
          <Radio
            key={index}
            label={index + (index > 1 ? " dager" : " dag")}
            value={index}
            checked={props.lengde === index}
            onChange={(e) => props.setLengde(index)}
          />
        );
      })}
    </ValgStyle>
  );
}

export default LengdeValg;
