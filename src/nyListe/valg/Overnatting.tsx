import * as React from 'react';
import ValgStyle from './ValgStyle';
import Radio from '../../utils/baseComponents/Radio';
import { getOvernattingArray, Overnatting } from '../../models/overnatting';

interface Props {
    overnatting: Overnatting;
    setOvernatting: (overnatting: Overnatting) => void;
}

function OvernattingValg(props: Props) {
    return (
        <ValgStyle name="Overnatting">
            {getOvernattingArray().map(o => (
                <Radio
                    key={o}
                    label={Overnatting[o]}
                    value={o}
                    checked={props.overnatting === o}
                    onChange={e => props.setOvernatting(+e.target.value)}
                />
            ))}
        </ValgStyle>
    );
}

export default OvernattingValg;
