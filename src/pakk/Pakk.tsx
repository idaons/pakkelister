import * as React from 'react';
import {useEffect, useState} from 'react';
import {getAlleTing} from './listMakers/getAlleTing';
import {groupArray} from '../utils/groupArray';
import {Kategori} from '../models/kategori';
import {decodeUrlParams, valgToUrlParams} from '../utils/valgToUrlParams';
import LinkButton from '../utils/baseComponents/LinkButton';
import {basepath} from '../app/App';
import VisValg from './Valg';
import {getStoredEkstraTing, getStoredItems} from '../utils/localStorage';
import {RouteComponentProps, WindowLocation} from '@reach/router';
import styled from "styled-components";
import Progress from "./Progress";
import {desktopMinWidth, smallMobileMaxWidth} from "../app/commonStyles";
import Bunnknapper from "./Bunnknapper";
import ExtraItems from "./ExtraItems";
import KategoriMarkup from "./KategoriMarkup";

interface Props extends RouteComponentProps {
    urlValg?: string;
    location?: WindowLocation;
}

const Style = styled.div`
  min-height: 100vh;
  padding: 2em;
  border: .2em white solid;
  border-radius: 1rem;
  background-color: #333;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  align-items: start;
  grid-template-areas:  "knapp valg koffert"
                        "liste liste liste"
                        "knapper knapper knapper";

  @media (max-width: ${desktopMinWidth}) {
    grid-template-columns: auto 1fr ;
    grid-template-rows: auto 1fr;
    grid-template-areas:
    "knapp koffert"
    "valg valg "
    "liste liste"
    "knapper knapper";
  }
`;

export const KategoriListe = styled.ul`
  > li {
    margin-right: 3em;

    @media (max-width: ${smallMobileMaxWidth}) {
      margin-right: 1em;
    }
  }
  grid-area: liste;
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  padding-left: 0;
`;

function Pakk(props: Props) {
    const { valg, currentListe, feilmelding } = decodeUrlParams(props.urlValg || '');
    const [checkedItems, setCheckedItems] = useState<string[]>(getStoredItems(currentListe));
    const [lagrerListe, setLagrerListe] = useState(false);
    const [ekstraTing, setEkstraTing] = useState<string[]>(getStoredEkstraTing(currentListe));

    useEffect(() => {
        setLagrerListe(true);
        localStorage.setItem(currentListe + '_valg', JSON.stringify(valg));
        localStorage.setItem(currentListe + '_checkedItems', JSON.stringify(checkedItems));
        localStorage.setItem(currentListe + '_ekstraItems', JSON.stringify(ekstraTing));
        const timer = setTimeout(() => {
            document.getElementById('lagreknapp')?.blur();
            setLagrerListe(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [checkedItems, ekstraTing]);

    const tilbakeKnapp = (
        <LinkButton
            style={{gridArea: 'knapp'}}
            to={basepath + '/' + valgToUrlParams(valg, currentListe)}
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
            setCheckedItems(checkedItems.filter((a) => a !== value));
        }
    };


    const alleElementer = getAlleTing(valg);
    const elementeriKategorier = groupArray(alleElementer, (it) => Kategori[it.kategori]);

    const progress = Math.floor(
        (checkedItems.length * 100) / (alleElementer.length + ekstraTing.length)
    );

    return (
        <Style>
            {tilbakeKnapp}
            <VisValg valg={valg} />
            <Progress progress={progress} />
            <KategoriListe>
                {elementeriKategorier.map((kategori) => (
                    <li key={kategori.category}>
                        <KategoriMarkup kategori={kategori} updateCheckedItems={updateCheckedItems} setCheckedItems={setCheckedItems} checkedItems={checkedItems} />
                    </li>
                ))}
                <li>
                    <ExtraItems checkedItems={checkedItems} ekstraTing={ekstraTing} setCheckedItems={setCheckedItems} setEkstraTing={setEkstraTing} updateCheckedItems={updateCheckedItems} />
                </li>
            </KategoriListe>
            <Bunnknapper lagrer={lagrerListe} navn={currentListe} clearPakkestatus={() => setCheckedItems([])} />
        </Style>
    );
}

export default Pakk;
