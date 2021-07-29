import * as React from "react";
import ValgStyle from "./ValgStyle";
import Radio from "../../utils/baseComponents/Radio";
import { getSesongLabel, Sesong } from "../../models/sesong";

interface Props {
  sesong: Sesong;
  setSesong: (sesong: Sesong) => void;
}

function SesongValg(props: Props) {
  return (
    <ValgStyle name="Sesong">
      <Radio
        label={getSesongLabel(Sesong.FjellSommer)}
        value={Sesong.FjellSommer}
        checked={props.sesong === Sesong.FjellSommer}
        onChange={(e) => props.setSesong(Sesong.FjellSommer)}
      />
      <Radio
        label={getSesongLabel(Sesong.BySommer)}
        value={Sesong.BySommer}
        checked={props.sesong === Sesong.BySommer}
        onChange={(e) => props.setSesong(Sesong.BySommer)}
      />
      <Radio
        label={Sesong[Sesong.Vinter]}
        value={Sesong.Vinter}
        checked={props.sesong === Sesong.Vinter}
        onChange={(e) => props.setSesong(Sesong.Vinter)}
      />
    </ValgStyle>
  );
}

export default SesongValg;
