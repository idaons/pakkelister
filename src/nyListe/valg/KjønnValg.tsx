import * as React from 'react';
import ValgStyle from "./ValgStyle";
import Radio from "../../utils/baseComponents/Radio";
import {getKjønnArray, Kjønn} from "../../models/kjønn";

interface Props {
    kjønn: Kjønn;
    setKjønn: (kjønn: Kjønn) => void;
}

function KjønnValg(props: Props) {
    return (
        <ValgStyle name="Kjønn">
            {getKjønnArray().map((k) =>
                <Radio
                    label={Kjønn[k]}
                    key={k}
                    value={k}
                    checked={props.kjønn === k}
                    onChange={(e) => props.setKjønn(+e.target.value)}
                />
            )}
        </ValgStyle>
    );
}

export default KjønnValg;
