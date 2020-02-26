import * as React from 'react';
import { Valg } from '../models/valg';
import classes from './pakk.less';
import { Sesong } from '../models/sesong';
import { Kjønn } from '../models/kjønn';
import { overnatting } from './listMakers/utils';
import { Aktivitet } from '../models/aktivitet';
import { Overnatting } from '../models/overnatting';

interface Props {
    valg: Valg;
}

function VisValg(props: Props) {
    return (
        <div className={classes.valg}>
            <ul>
                <li>{Sesong[props.valg.sesong]}</li>
                <li>{Kjønn[props.valg.kjønn]}</li>
                {overnatting(props.valg) && <li>{props.valg.lengde} dager</li>}
            </ul>
            <ul>
                {props.valg.aktiviteter.map(aktivitet => (
                    <li>{Aktivitet[aktivitet]}</li>
                ))}
            </ul>
            <ul>
                {props.valg.overnatting.map(overnatting => (
                    <li>{Overnatting[overnatting]}</li>
                ))}
            </ul>
        </div>
    );
}

export default VisValg;
