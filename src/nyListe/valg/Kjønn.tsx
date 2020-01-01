import * as React from 'react';
import ValgStyle from "./ValgStyle";
import Radio from "../../utils/baseComponents/Radio";

const kjønnListe = ["Mann", "Kvinne", "Begge", "Vil ikke oppgi"];

interface Props {
    kjønn: string;
    setKjønn: (kjønn: string) => void;
}

function Kjønn(props: Props) {
    return (
        <ValgStyle name="Kjønn">
            {kjønnListe.map((k) =>
                <Radio
                    label={k}
                    key={k}
                    value={k}
                    checked={props.kjønn === k}
                    onChange={(e) => props.setKjønn(e.target.value)}
                />
            )}
        </ValgStyle>
    );
}

export default Kjønn;
