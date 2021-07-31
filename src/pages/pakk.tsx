import * as React from "react";
import { useEffect, useState } from "react";
import { getAlleTing } from "../pakk/listMakers/getAlleTing";
import { groupArray } from "../utils/groupArray";
import { Kategori } from "../models/kategori";
import {
  useDecodeUrlParamsToValg,
  encodeValgToUrlParams,
} from "../utils/encodeValgToUrlParams";
import LinkButton from "../utils/baseComponents/LinkButton";
import VisValg from "../pakk/Valg";
import { getStoredEkstraTing, getStoredItems } from "../utils/localStorage";
import styled from "styled-components";
import Progress from "../pakk/Progress";
import { desktopMinWidth, smallMobileMaxWidth } from "../commonStyles";
import Bunnknapper from "../pakk/Bunnknapper";
import ExtraItems from "../pakk/ExtraItems";
import KategoriMarkup from "../pakk/KategoriMarkup";

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
  grid-template-areas:
    "knapp valg koffert"
    "liste liste liste"
    "knapper knapper knapper";

  @media (max-width: ${desktopMinWidth}) {
    grid-template-columns: auto 1fr;
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

function Pakk() {
  const { valg, listeNavn, feilmelding } = useDecodeUrlParamsToValg();
  const [checkedItems, setCheckedItems] = useState<string[]>(
    getStoredItems(listeNavn)
  );
  const [lagrerListe, setLagrerListe] = useState(false);
  const [ekstraTing, setEkstraTing] = useState<string[]>(
    getStoredEkstraTing(listeNavn)
  );

  useEffect(() => {
    setLagrerListe(true);
    window.localStorage.setItem(listeNavn + "_valg", JSON.stringify(valg));
    window.localStorage.setItem(
      listeNavn + "_checkedItems",
      JSON.stringify(checkedItems)
    );
    window.localStorage.setItem(
      listeNavn + "_ekstraItems",
      JSON.stringify(ekstraTing)
    );
    const timer = setTimeout(() => {
      document.getElementById("lagreknapp")?.blur();
      setLagrerListe(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [checkedItems, ekstraTing]);

  const tilbakeKnapp = (
    <LinkButton
      style={{ gridArea: "knapp" }}
      href={"/?" + encodeValgToUrlParams(valg, listeNavn)}
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
  const elementeriKategorier = groupArray(
    alleElementer,
    (it) => Kategori[it.kategori]
  );

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
      <Bunnknapper
        lagrer={lagrerListe}
        navn={listeNavn}
        clearPakkestatus={() => setCheckedItems([])}
      />
    </Style>
  );
}

export default Pakk;
