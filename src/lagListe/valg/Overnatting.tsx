import * as React from "react";
import ValgStyle from "./ValgStyle";
import {
  getOvernattingArray,
  getOvernattingLabel,
  Overnatting,
} from "../../models/overnatting";
import Checkbox from "../../utils/baseComponents/Checkbox";
import { ChangeEvent } from "react";

interface Props {
  overnatting: Overnatting[];
  setOvernatting: (overnatting: Overnatting[]) => void;
}

function OvernattingValg(props: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (e.target.checked) {
      props.setOvernatting([...props.overnatting, value]);
    } else {
      props.setOvernatting(props.overnatting.filter((a) => a !== value));
    }
  };

  return (
    <ValgStyle name="Overnatting">
      {getOvernattingArray().map((overnatting) => (
        <Checkbox
          key={overnatting}
          label={getOvernattingLabel(overnatting)}
          value={overnatting}
          checked={props.overnatting.includes(overnatting)}
          onChange={handleChange}
        />
      ))}
    </ValgStyle>
  );
}

export default OvernattingValg;
