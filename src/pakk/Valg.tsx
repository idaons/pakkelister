import * as React from 'react';
import { Valg } from '../models/valg';
import classes from './pakk.less';
import { getSesongLabel } from '../models/sesong';
import { getKjønnLabel, Kjønn } from '../models/kjønn';
import { overnatting } from './listMakers/utils';
import { Aktivitet } from '../models/aktivitet';
import { getOvernattingLabel } from '../models/overnatting';

interface Props {
    valg: Valg;
}

function VisValg(props: Props) {
    return (
        <div className={classes.valg}>
            <ul>
                <li>{getSesongLabel(props.valg.sesong)}</li>
                <li>{getKjønnLabel(props.valg.kjønn)}</li>
                {overnatting(props.valg) && <li>{props.valg.lengde} dager</li>}
            </ul>
            <ul>
                {props.valg.aktiviteter.map(aktivitet => (
                    <li key={aktivitet}>{Aktivitet[aktivitet]}</li>
                ))}
            </ul>
            <ul>
                {props.valg.overnatting.map(overnatting => (
                    <li key={overnatting}>{getOvernattingLabel(overnatting)}</li>
                ))}
            </ul>
        </div>
    );
}

export default VisValg;
