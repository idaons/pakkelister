import * as React from 'react';
import { ReactNode } from 'react';
import * as classes from '../LagListe.less';

interface Props {
    name: string;
    children: ReactNode;
}

function ValgStyle(props: Props) {
    return (
        <div className={classes.valgGruppe}>
            <h2>{props.name}</h2>
            <div className={classes.inputGruppe}>{props.children}</div>
        </div>
    );
}

export default ValgStyle;
