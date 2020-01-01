import * as React from "react";
import ValgStyle from "./ValgStyle";
import Radio from "../../utils/baseComponents/Radio";

const overnattingsListe = ["DNT-hytte", "Telt", "Hus/hotell"];

interface Props {
  overnatting: string;
  setOvernatting: (overnatting: string) => void;
}

function Overnatting(props: Props) {
  return (
    <ValgStyle name="Overnatting">
      {overnattingsListe.map(o => (
        <Radio
          key={o}
          label={o}
          value={o}
          checked={props.overnatting === o}
          onChange={e => props.setOvernatting(e.target.value)}
        />
      ))}
    </ValgStyle>
  );
}

export default Overnatting;
