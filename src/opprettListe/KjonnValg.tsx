import * as React from "react";
import ValgStyle from "./ValgStyle";
import Radio from "../ui/Radio";
import { getKjønnArray, getKjønnLabel } from "../hjelpefunksjoner/kjonn";
import { Kjonn } from "../utils/types";

interface Props {
  kjønn: Kjonn;
  setKjønn: (kjønn: Kjonn) => void;
}

function KjonnValg(props: Props) {
  return (
    <ValgStyle name="Kjønn">
      {getKjønnArray().map((kjønn) => (
        <Radio
          label={getKjønnLabel(kjønn)}
          key={kjønn}
          value={kjønn}
          checked={props.kjønn === kjønn}
          onChange={() => props.setKjønn(kjønn)}
        />
      ))}
    </ValgStyle>
  );
}

export default KjonnValg;
