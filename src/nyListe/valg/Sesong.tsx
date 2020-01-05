import * as React from 'react';
import ValgStyle from './ValgStyle';
import Radio from '../../utils/baseComponents/Radio';

interface Props {
    sesong: string;
    setSesong: (sesong: SesongEnum) => void;
}

export enum SesongEnum {
    Sommer = 'Sommer',
    Vinter = 'Vinter',
}

function Sesong(props: Props) {
    return (
        <ValgStyle name="Sesong">
            <Radio
                label={SesongEnum.Sommer}
                value={SesongEnum.Sommer}
                checked={props.sesong === SesongEnum.Sommer}
                onChange={e => props.setSesong(SesongEnum.Sommer)}
            />
            <Radio
                label={SesongEnum.Vinter}
                value={SesongEnum.Vinter}
                checked={props.sesong === SesongEnum.Vinter}
                onChange={e => props.setSesong(SesongEnum.Vinter)}
            />
        </ValgStyle>
    );
}

export default Sesong;
