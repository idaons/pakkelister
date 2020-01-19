import * as React from 'react';
import { useRef } from 'react';
import { pakkAlleLister } from './listMakers/allRules';
import { groupArray } from '../utils/groupArray';
import { Kategori } from '../models/kategori';
import classes from './pakk.less';
import { guid } from '../utils/guid';
import { InputProps } from '../utils/baseComponents/Input';
import { decodeUrlParams, valgToUrlParams } from '../utils/valgToUrlParams';
import LinkButton from '../utils/baseComponents/LinkButton';

function Checkbox(props: InputProps) {
    const ref = useRef(guid());
    const { label, ...rest } = props;
    return (
        <div className={classes.input}>
            <input id={ref.current} type="checkbox" {...rest} />
            <label htmlFor={ref.current}>{label}</label>
        </div>
    );
}

function Pakk(props: { urlValg: string }) {
    const valg = decodeUrlParams(props.urlValg);

    const tilbakeKnapp = (
        <LinkButton to={'/nyliste/' + valgToUrlParams(valg.valg)}>Tilbake</LinkButton>
    );

    if (valg.feilmelding) {
        return (
            <>
                <p>{valg.feilmelding}</p>
                {tilbakeKnapp}
            </>
        );
    }

    const alleElementer = pakkAlleLister(valg.valg);
    const iKategorier = groupArray(alleElementer, it => Kategori[it.kategori]);

    return (
        <div className={classes.pakk}>
            {tilbakeKnapp}
            Du må pakke!
            <ul>
                {iKategorier.map(kategori => (
                    <div key={kategori.category}>
                        <h2>{kategori.category}</h2>
                        <ul>
                            {kategori.array.map(element => (
                                <li key={element.navn}>
                                    <Checkbox
                                        key={'chk-' + element.navn}
                                        label={
                                            (element.antall > 1 ? element.antall + ' ' : '') +
                                            element.navn
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Pakk;
