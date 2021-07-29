import * as React from "react";
import ValgStyle from "./ValgStyle";
import Checkbox from "../../utils/baseComponents/Checkbox";

interface Props {
  spesielleBehov: boolean;
  setSpesielleBehov: (value: boolean) => void;
}

function CustomValg(props: Props) {
  return (
    <ValgStyle name="Annet">
      <Checkbox
        label="Spesielle behov"
        checked={props.spesielleBehov}
        onChange={(e) => props.setSpesielleBehov(e.target.checked)}
      />
    </ValgStyle>
  );
}

export default CustomValg;
