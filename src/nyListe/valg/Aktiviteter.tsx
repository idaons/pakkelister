import ValgStyle from "./ValgStyle";
import * as React from "react";
import Checkbox from "../../utils/baseComponents/Checkbox";

const aktivitetsListeSommer = [
  "Klatring",
  "Fottur",
  "Tinderangling",
  "Jogging"
];
const aktivitetsListeVinter = [
  "Randonée",
  "Fjellski",
  "Langrenn klassisk",
  "Skøyteski"
];
const aktivitetsListeAnnet = ["Fest", "Bytur"];
const aktiviteter = aktivitetsListeSommer
  .concat(aktivitetsListeVinter)
  .concat(aktivitetsListeAnnet);

interface Props {
  aktiviteter: string[];
  setAktiviteter: (aktiviteter: string[]) => void;
}

function Aktiviteter(props: Props) {
  const handleChange = (e: any) => {
    if (e.target.checked) {
      props.setAktiviteter([...props.aktiviteter, e.target.value]);
    } else {
      props.setAktiviteter(props.aktiviteter.filter(a => a !== e.target.value));
    }
  };

  return (
    <ValgStyle name="Aktiviteter">
      {aktiviteter.map(a => {
        return (
          <Checkbox
            key={a}
            label={a}
            value={a}
            checked={props.aktiviteter.includes(a)}
            onChange={handleChange}
          />
        );
      })}
    </ValgStyle>
  );
}

export default Aktiviteter;
