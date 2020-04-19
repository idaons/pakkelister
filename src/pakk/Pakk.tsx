import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { getAlleTing } from './listMakers/getAlleTing';
import { groupArray } from '../utils/groupArray';
import { Kategori } from '../models/kategori';
import classes from './pakk.less';
import Checkbox from '../utils/baseComponents/Checkbox';
import { decodeUrlParams, valgToUrlParams } from '../utils/valgToUrlParams';
import LinkButton from '../utils/baseComponents/LinkButton';
import Button from '../utils/baseComponents/Button';
import { AppContext, basepath } from '../app/App';
import VisValg from './Valg';

function getStoredItems(): string[] {
    const items = window.localStorage.getItem('checkedItems');
    return items ? JSON.parse(items) : [];
}

function storeItems(checkedItems: string[]) {
    window.localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
}

function Pakk(props: { urlValg: string; tittel: string }) {
    const valg = decodeUrlParams(props.urlValg);
    const [checkedItems, setCheckedItems] = useState<string[]>(getStoredItems());
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        storeItems(checkedItems);
    }, [checkedItems]);

    const tilbakeKnapp = (
        <LinkButton
            className={classes.knapp}
            to={basepath + '/nyliste/' + valgToUrlParams(valg.valg)}
        >
            Tilbake
        </LinkButton>
    );

    if (valg.feilmelding) {
        return (
            <>
                <p>{valg.feilmelding}</p>
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

    const alleElementer = getAlleTing(valg.valg);
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
        let storageName = props.tittel.replace(' ', '_');
        console.log(props.tittel, storageName);
        localStorage.setItem(storageName + '_valg', JSON.stringify(valg));
        localStorage.setItem(storageName + '_checkedItems', JSON.stringify(checkedItems));
    };

    const progress = Math.floor((checkedItems.length * 100) / alleElementer.length);
    document.documentElement.style.setProperty('--progress', progress + '%');

    return (
        <div className={classes.pakk}>
            {tilbakeKnapp}
            <VisValg valg={valg.valg} />
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

            <Button className={classes.lagreknapp} onClick={lagreListe}>
                {'Lagre "' + state.listeNavn + '"'}
            </Button>
        </div>
    );
}

export default Pakk;
