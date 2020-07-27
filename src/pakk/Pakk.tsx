import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { getAlleTing } from './listMakers/getAlleTing';
import { groupArray } from '../utils/groupArray';
import { Kategori } from '../models/kategori';
// @ts-ignore
import classes from './pakk.less';
import Checkbox from '../utils/baseComponents/Checkbox';
import { decodeUrlParams, valgToUrlParams } from '../utils/valgToUrlParams';
import LinkButton from '../utils/baseComponents/LinkButton';
import Button from '../utils/baseComponents/Button';
import { AppContext, basepath } from '../app/App';
import VisValg from './Valg';
import { getStoredItems, storeItems } from '~utils/localStorage';
import InputBase from '~utils/baseComponents/InputBase';

function Pakk(props: { urlValg: string }) {
    const { valg, tittel, feilmelding } = decodeUrlParams(props.urlValg);
    const [checkedItems, setCheckedItems] = useState<string[]>(getStoredItems(tittel));

    useEffect(() => {
        storeItems(checkedItems);
    }, [checkedItems]);

    const tilbakeKnapp = (
        <LinkButton
            className={classes.knapp}
            to={basepath + '/lagliste/' + valgToUrlParams(valg, tittel)}
        >
            Tilbake
        </LinkButton>
    );

    if (feilmelding) {
        return (
            <>
                <p>{feilmelding}</p>
                {tilbakeKnapp}
            </>
        );
    }

    const updateCheckedItems = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.checked) {
            setCheckedItems([...checkedItems, value]);
        } else {
            setCheckedItems(checkedItems.filter(a => a !== value));
        }
    };

    const alleElementer = getAlleTing(valg);
    const iKategorier = groupArray(alleElementer, it => Kategori[it.kategori]);

    const updateCatogery = (catogery: string) => () => {
        const currentCatogery =
            iKategorier.find(it => it.category === catogery)?.array.map(it => it.navn) || [];
        const allChecked = currentCatogery.every(it => checkedItems.includes(it));
        const filteredCheckedItems = checkedItems.filter(it => !currentCatogery?.includes(it));
        if (allChecked) {
            setCheckedItems(filteredCheckedItems);
        } else {
            setCheckedItems([...filteredCheckedItems, ...currentCatogery]);
        }
    };

    const lagreListe = () => {
        let storageName = tittel.replace(' ', '_');
        localStorage.setItem(storageName + '_valg', JSON.stringify(valg));
        localStorage.setItem(storageName + '_checkedItems', JSON.stringify(checkedItems));
        window.alert('OK');
    };

    const progress = Math.floor((checkedItems.length * 100) / alleElementer.length);
    document.documentElement.style.setProperty('--progress', progress + '%');

    return (
        <div className={classes.pakk}>
            {tilbakeKnapp}
            <VisValg valg={valg} />
            <div className={classes.progress}>
                <i className={classes.icon}></i>
                <span className={classes.prosent}>{progress}%</span>
            </div>

            <ul className={classes.kategoriListe}>
                {iKategorier.map(kategori => (
                    <li key={kategori.category}>
                        <Checkbox
                            checked={kategori.array.every(it => checkedItems.includes(it.navn))}
                            header={true}
                            strikeThrough
                            label={kategori.category}
                            onChange={updateCatogery(kategori.category)}
                        />
                        <ul className={classes.tingListe}>
                            {kategori.array.map(element => (
                                <li key={element.navn}>
                                    <Checkbox
                                        value={element.navn}
                                        label={
                                            (element.antall > 1 ? element.antall + ' ' : '') +
                                            element.navn
                                        }
                                        checked={checkedItems.includes(element.navn)}
                                        strikeThrough={true}
                                        onChange={updateCheckedItems}
                                    />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className={classes.knapper}>
                <Button onClick={lagreListe}>Lagre {tittel}</Button>
                <Button onClick={() => confirm('Vil du nullstille lista?') && setCheckedItems([])}>
                    Nullstill
                </Button>
            </div>
        </div>
    );
}

export default Pakk;
