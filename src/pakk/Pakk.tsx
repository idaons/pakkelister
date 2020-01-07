import * as React from 'react';
import { useContext } from 'react';
import { AppStages, AppStateContext } from '../app/appStateContext';
import { pakkAlleLister } from './listMakers/allRules';
import { groupArray } from '../utils/groupArray';
import { Kategori } from '../models/kategori';

function Pakk() {
    const context = useContext(AppStateContext);

    if (context.stage !== AppStages.Pack) {
        return <div>Her havnet du ved en kjempefeil!</div>;
    }

    const alleElementer = pakkAlleLister(context.valg);
    const iKategorier = groupArray(alleElementer, it => Kategori[it.kategori]);

    return (
        <div>
            Du må pakke!
            <ul>
                {iKategorier.map(kategori => (
                    <div key={kategori.category}>
                        <h2>{kategori.category}</h2>
                        <ul>
                            {kategori.array.map(element => (
                                <li key={element.navn}>
                                    {element.antall > 1 && element.antall} {element.navn}
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
