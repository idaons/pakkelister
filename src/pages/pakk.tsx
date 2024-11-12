import * as React from "react";
import { useEffect, useState } from "react";
import { getAlleTing } from "../pakkListe/listMakers/getAlleTing";
import { groupArray } from "../utils/groupArray";
import { Kategori } from "../models/kategori";
import {
  useDecodeUrlParamsToValg,
  encodeValgToUrlParams,
} from "../utils/encodeValgToUrlParams";
import LinkButton from "../ui/LinkButton";
import VisValg from "../pakkListe/Valg";
import styled from "styled-components";
import Progress from "../pakkListe/Progress";
import { desktopMinWidth, smallMobileMaxWidth } from "../commonStyles";
import Bunnknapper from "../pakkListe/Bunnknapper";
import ExtraItems from "../pakkListe/ExtraItems";
import KategoriMarkup from "../pakkListe/KategoriMarkup";
import UgyldigLocalStorage from "../pakkListe/UgyldigLocalStorage";
import { useLocalStorage } from "../utils/useLocalStorage";

const Style = styled.div`
  min-height: 100vh;
  padding: 2em;
  border: 0.2em white solid;
  border-radius: 1rem;
  background-color: #333;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  align-items: start;
  grid-gap: 4rem;
  grid-template-areas:
    "header valg koffert"
    "liste liste liste"
    "warning warning warning"
    "knapper knapper knapper";

  @media (max-width: ${desktopMinWidth}) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 3rem 1rem;
    grid-template-areas:
      "header koffert"
      "valg valg "
      "liste liste"
      "warning warning"
      "knapper knapper";
  }
`;

const StyledH1 = styled.h1`
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

export const KategoriListe = styled.ul`
  margin: 0;

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

function Pakk() {
  const { valg, listeNavn, feilmelding } = useDecodeUrlParamsToValg();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [lagrerListe, setLagrerListe] = useState(false);
  const [initalLocalStorageSync, setInitialLocalStorageSync] = useState(false);
  const [ekstraTing, setEkstraTing] = useState<string[]>([]);
  const alleElementer = getAlleTing(valg);
  const ls = useLocalStorage();

  // Sync with stored values from localstorage on mount
  useEffect(() => {
    if (!ls.isReady || initalLocalStorageSync) return;
    setInitialLocalStorageSync(true);
    const listFromLocalStorage = ls.getList(listeNavn);
    if (!listFromLocalStorage) return;
    setCheckedItems(listFromLocalStorage.checked);
    setEkstraTing(listFromLocalStorage.ekstraItems);
  }, [listeNavn, ls, initalLocalStorageSync]);

  useEffect(() => {
    setLagrerListe(true);
    ls.saveList({
      listeNavn,
      checked: checkedItems,
      ekstraItems: ekstraTing,
      valg,
    });
  }, [checkedItems, ekstraTing]);

  const tilbakeKnapp = (
    <LinkButton href={"/?" + encodeValgToUrlParams(valg, listeNavn)}>
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

  const elementeriKategorier = groupArray(
    alleElementer,
    (it) => Kategori[it.kategori],
  );

  const progress = Math.floor(
    (checkedItems.length * 100) / (alleElementer.length + ekstraTing.length),
  );

  return (
    <Style>
      <div style={{ gridArea: "header" }}>
        <StyledH1>Pakker {listeNavn && `'${listeNavn}'`}</StyledH1>
        {tilbakeKnapp}
      </div>
      <VisValg valg={valg} />
      <Progress progress={progress} />
      <KategoriListe>
        {elementeriKategorier.map((kategori) => (
          <li key={kategori.category}>
            <KategoriMarkup
              kategori={kategori}
              updateCheckedItems={updateCheckedItems}
              setCheckedItems={setCheckedItems}
              checkedItems={checkedItems}
            />
          </li>
        ))}
        <li>
          <ExtraItems
            checkedItems={checkedItems}
            ekstraTing={ekstraTing}
            setCheckedItems={setCheckedItems}
            setEkstraTing={setEkstraTing}
            updateCheckedItems={updateCheckedItems}
          />
        </li>
      </KategoriListe>
      <UgyldigLocalStorage
        ekstraItems={ekstraTing}
        checked={checkedItems}
        alleElementer={alleElementer}
        setChecked={setCheckedItems}
      />
      <Bunnknapper
        lagrer={lagrerListe}
        navn={listeNavn}
        clearPakkestatus={() => setCheckedItems([])}
      />
    </Style>
  );
}

export default Pakk;
