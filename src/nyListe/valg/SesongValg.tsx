import * as React from 'react';
import ValgStyle from './ValgStyle';
import Radio from '../../utils/baseComponents/Radio';
import { Sesong } from '../../models/sesong';

interface Props {
    sesong: Sesong;
    setSesong: (sesong: Sesong) => void;
}

function SesongValg(props: Props) {
    return (
        <ValgStyle name="Sesong">
            <Radio
                label={Sesong[Sesong.Sommer]}
                value={Sesong.Sommer}
                checked={props.sesong === Sesong.Sommer}
                onChange={e => props.setSesong(Sesong.Sommer)}
            />
            <Radio
                label={Sesong[Sesong.Vinter]}
                value={Sesong.Vinter}
                checked={props.sesong === Sesong.Vinter}
                onChange={e => props.setSesong(Sesong.Vinter)}
            />
        </ValgStyle>
    );
}

export default SesongValg;
