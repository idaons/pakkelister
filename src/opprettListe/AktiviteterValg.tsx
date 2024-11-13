import ValgStyle from "./ValgStyle";
import * as React from "react";
import Checkbox from "../ui/Checkbox";
import {
  Aktivitet,
  getAktivitetAsArray,
  getAktivitetLabel,
} from "../models/aktivitet";

interface Props {
  valgteAktiviteter: Aktivitet[];
  setAktiviteter: (aktiviteter: Aktivitet[]) => void;
}

function AktiviteterValg(props: Props) {
  const handleChange = (aktivitet: Aktivitet) => {
    if (!props.valgteAktiviteter.includes(aktivitet)) {
      props.setAktiviteter([...props.valgteAktiviteter, aktivitet]);
    } else {
      props.setAktiviteter(
        props.valgteAktiviteter.filter((a) => a !== aktivitet),
      );
    }
  };

  return (
    <ValgStyle name="Aktiviteter">
      {getAktivitetAsArray().map((aktivitet) => {
        return (
          <Checkbox
            key={aktivitet}
            label={getAktivitetLabel(aktivitet)}
            value={aktivitet}
            checked={props.valgteAktiviteter.includes(aktivitet)}
            onChange={() => handleChange(aktivitet)}
          />
        );
      })}
    </ValgStyle>
  );
}

export default React.memo(AktiviteterValg);
