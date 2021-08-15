import * as React from "react";
import ValgStyle from "./ValgStyle";
import Checkbox from "../../utils/baseComponents/Checkbox";

interface Props {
  idaBehov: boolean;
  setIdaBehov: (value: boolean) => void;
}

function CustomValg(props: Props) {
  return (
    <ValgStyle name="Annet">
      <Checkbox
        label="Ida sine sære ting"
        checked={props.idaBehov}
        onChange={(e) => props.setIdaBehov(e.target.checked)}
      />
    </ValgStyle>
  );
}

export default CustomValg;
