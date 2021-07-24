import * as React from 'react';
import ValgStyle from './ValgStyle';
import Radio from '../../utils/baseComponents/Radio';
import { Sesong } from '../../models/sesong';
import { Valg } from '../models/valg';

interface Props {
    lengde: number;
    setLengde: (sesong: number) => void;
}

export const maksAntallDager = 7;

export function erLangtur(valg: Valg): boolean {
    return valg.lengde >= maksAntallDager;
}

function LengdeValg(props: Props) {
    return (
        <ValgStyle name="Lengde">
            {[...new Array(maksAntallDager + 1)].map((_, index) => {
                if (index === 0) {
                    return null;
                }
                return (
                    <Radio
                        key={index}
                        label={index + (index > 1 ? ' dager' : ' dag')}
                        value={index}
                        checked={props.lengde === index}
                        onChange={e => props.setLengde(index)}
                    />
                );
            })}
        </ValgStyle>
    );
}

export default LengdeValg;
