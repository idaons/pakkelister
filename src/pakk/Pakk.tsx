import * as React from 'react';
import { useEffect, useState } from 'react';
import { getAlleTing } from './listMakers/getAlleTing';
import { groupArray } from '../utils/groupArray';
import { Kategori } from '../models/kategori';
import Checkbox from '../utils/baseComponents/Checkbox';
import { decodeUrlParams, valgToUrlParams } from '../utils/valgToUrlParams';
import LinkButton from '../utils/baseComponents/LinkButton';
import Button from '../utils/baseComponents/Button';
import { basepath } from '../app/App';
import VisValg from './Valg';
import { getStoredEkstraTing, getStoredItems } from '../utils/localStorage';
import { RouteComponentProps, WindowLocation } from '@reach/router';
import Soppelkasse from '../ikoner/Soppelkasse';
import styled from "styled-components";
import Progress from "./Progress";
import {desktopMinWidth, smallMobileMaxWidth} from "../app/commonStyles";

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

  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;

const KategoriListe = styled.ul`
  > li {
    margin-right: 3em;

    @media (max-width: ${smallMobileMaxWidth}) {
      margin-right: 1em;
    }
  }
  grid-area: liste;
  display: flex;
  flex-flow: row wrap;
`;

const TingListe = styled.ul`
  > li {
    margin-bottom: .3em;
  }
`;

const EkstravalgWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;


  @media (max-width: ${smallMobileMaxWidth}) {
    flex-direction: column;
  }

  input {
    max-width: 10rem;
  }

  button{
    margin-left: 0.5rem;
    padding: 0.3rem 0.5rem;
    border-width: 0.1rem;

    @media (max-width: ${smallMobileMaxWidth}) {
      margin-left: 0;
      margin-top: 0.5rem;
      width: fit-content;
    }
  }
`;

const SlettKnapp = styled.button`
  margin-left: 0.4rem;
  border: none;
  background-color: transparent;

  &:hover,&:focus {
    transform: scale(1.4);
  }
`;

const Bunnknapper = styled.div`
  grid-area: knapper;
  margin-top: 2rem;
  > * {
    margin-right: .5rem;
  }
`;

function Pakk(props: Props) {
    const { valg, currentListe, feilmelding } = decodeUrlParams(props.urlValg || '');
    const [checkedItems, setCheckedItems] = useState<string[]>(getStoredItems(currentListe));
    const [lagrerListe, setLagrerListe] = useState(false);
    const [ekstraTing, setEkstraTing] = useState<string[]>(getStoredEkstraTing(currentListe));
    const [currentEkstraVerdi, setCurrentEkstraVerdi] = useState<string>('');

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

    const removeEkstraItem = (value: string) => {
        const tmp = ekstraTing.filter((item) => item !== value);
        setEkstraTing(tmp);
    };

    const leggTilEkstra = () => {
        if (currentEkstraVerdi === '') {
            return;
        }
        setEkstraTing([...ekstraTing, currentEkstraVerdi]);
        setCurrentEkstraVerdi('');
    };

    const alleElementer = getAlleTing(valg);
    const iKategorier = groupArray(alleElementer, (it) => Kategori[it.kategori]);

    const updateCatogery = (catogery: string) => () => {
        const currentCatogery =
            iKategorier.find((it) => it.category === catogery)?.array.map((it) => it.navn) || [];
        const allChecked = currentCatogery.every((it) => checkedItems.includes(it));
        const filteredCheckedItems = checkedItems.filter((it) => !currentCatogery?.includes(it));
        if (allChecked) {
            setCheckedItems(filteredCheckedItems);
        } else {
            setCheckedItems([...filteredCheckedItems, ...currentCatogery]);
        }
    };

    const onEkstraChecked = () => {
        const allChecked = ekstraTing.every((it) => checkedItems.includes(it));
        const filteredCheckedItems = checkedItems.filter((it) => !ekstraTing?.includes(it));
        if (allChecked) {
            setCheckedItems(filteredCheckedItems);
        } else {
            setCheckedItems([...filteredCheckedItems, ...ekstraTing]);
        }
    };

    const progress = Math.floor(
        (checkedItems.length * 100) / (alleElementer.length + ekstraTing.length)
    );

    return (
        <Style>
            {tilbakeKnapp}
            <VisValg valg={valg} />
            <Progress progress={progress} />
            <KategoriListe>
                {iKategorier.map((kategori) => (
                    <li key={kategori.category}>
                        <Checkbox
                            checked={kategori.array.every((it) => checkedItems.includes(it.navn))}
                            header={true}
                            strikeThrough
                            label={kategori.category}
                            onChange={updateCatogery(kategori.category)}
                        />
                        <TingListe>
                            {kategori.array.map((element) => (
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
                        </TingListe>
                    </li>
                ))}
                <li>
                    <Checkbox
                        header={true}
                        strikeThrough
                        label="Ekstra"
                        checked={ekstraTing.every((it) => checkedItems.includes(it))}
                        onChange={onEkstraChecked}
                    />
                    <TingListe>
                        <EkstravalgWrapper>
                            <input
                                type="tekst"
                                value={currentEkstraVerdi}
                                onChange={(e) => setCurrentEkstraVerdi(e.target.value)}
                            />
                            <Button onClick={leggTilEkstra}>
                                + Legg til
                            </Button>
                        </EkstravalgWrapper>
                        {ekstraTing.map((element) => (
                            <li key={element}>
                                <Checkbox
                                    value={element}
                                    label={element}
                                    checked={checkedItems.includes(element)}
                                    strikeThrough={true}
                                    onChange={updateCheckedItems}
                                />
                                <SlettKnapp
                                    aria-label="Slett"
                                    onClick={() => removeEkstraItem(element)}
                                >
                                    <Soppelkasse width="1rem" />
                                </SlettKnapp>
                            </li>
                        ))}
                    </TingListe>
                </li>
            </KategoriListe>

            <Bunnknapper>
                <p>
                    {lagrerListe
                        ? 'Lagrer...'
                        : `Pakklisten ${
                              currentListe && `'${currentListe}'`
                          } er lagret på enheten din 🏔🌤️`}
                </p>
                <Button onClick={() => confirm('Vil du nullstille lista?') && setCheckedItems([])}>
                    Nullstill
                </Button>
            </Bunnknapper>
        </Style>
    );
}

export default Pakk;
