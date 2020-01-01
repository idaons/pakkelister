import * as React from "react";
import ValgStyle from "./ValgStyle";
import Radio from "../../utils/baseComponents/Radio";

interface Props {
  sesong: string;
  setSesong: (sesong: string) => void;
}

function Sesong(props: Props) {
  return (
    <ValgStyle name="Sesong">
      <Radio
        label="Sommer"
        value="sommer"
        checked={props.sesong === "sommer"}
        onChange={e => props.setSesong(e.target.value)}
      />
      <Radio
        label="Vinter"
        value="vinter"
        checked={props.sesong === "vinter"}
        onChange={e => props.setSesong(e.target.value)}
      />
    </ValgStyle>
  );
}

export default Sesong;
