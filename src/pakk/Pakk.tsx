import * as React from 'react';
import { useContext, useRef } from 'react';
import { TrinnEnum, AppStateContext } from '../app/appStateContext';
import { pakkAlleLister } from './listMakers/allRules';
import { groupArray } from '../utils/groupArray';
import { Kategori } from '../models/kategori';
import classes from './pakk.less';
import Checkbox from '../utils/baseComponents/Checkbox';


function Pakk() {
    const context = useContext(AppStateContext);

    if (context.trinn !== TrinnEnum.PakkListe) {
        return <div>Her havnet du ved en kjempefeil!</div>;
    }

    const alleElementer = pakkAlleLister(context.valg);
    const iKategorier = groupArray(alleElementer, it => Kategori[it.kategori]);

    return (
        <div className={classes.pakk}>
            Du må pakke!
            <ul>
                {iKategorier.map(kategori => (
                    <div key={kategori.category}>
                        <h2>{kategori.category}</h2>
                        <ul>
                            {kategori.array.map(element => (
                                <li key={element.navn}>
                                    <Checkbox
                                        key={'chk-'+element.navn}
                                        label={(element.antall > 1 ? element.antall + ' ': '') + element.navn}
                                        strikeThrough={true}
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
