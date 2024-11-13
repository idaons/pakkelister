import {
  getOvernattingArray,
  getOvernattingLabel,
} from "../hjelpefunksjoner/overnatting";
import Checkbox from "../ui/Checkbox";
import ValgStyle from "./ValgStyle";
import { Overnatting } from "../utils/types";

interface Props {
  overnatting: Overnatting[];
  setOvernatting: (overnatting: Overnatting[]) => void;
}

function OvernattingValg(props: Props) {
  const handleChange = (overnatting: Overnatting) => {
    if (!props.overnatting.includes(overnatting)) {
      props.setOvernatting([...props.overnatting, overnatting]);
    } else {
      props.setOvernatting(props.overnatting.filter((a) => a !== overnatting));
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
          onChange={() => handleChange(overnatting)}
        />
      ))}
    </ValgStyle>
  );
}

export default OvernattingValg;
