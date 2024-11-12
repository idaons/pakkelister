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
  const handleChange = (e: any) => {
    const value = +e.target.value;
    if (e.target.checked) {
      props.setAktiviteter([...props.valgteAktiviteter, value]);
    } else {
      props.setAktiviteter(props.valgteAktiviteter.filter((a) => a !== value));
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
            onChange={handleChange}
          />
        );
      })}
    </ValgStyle>
  );
}

export default React.memo(AktiviteterValg);
