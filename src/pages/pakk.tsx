import styled from "styled-components";
import { desktopMinWidth, smallMobileMaxWidth } from "../commonStyles";
import { Kategori } from "../models/kategori";
import Bunnknapper from "../pakkListe/Bunnknapper";
import ExtraItems from "../pakkListe/ExtraItems";
import KategoriMarkup from "../pakkListe/KategoriMarkup";
import { getAlleTing } from "../pakkListe/listMakers/getAlleTing";
import Progress from "../pakkListe/Progress";
import UgyldigLocalStorage from "../pakkListe/UgyldigLocalStorage";
import VisValg from "../pakkListe/Valg";
import LinkButton from "../ui/LinkButton";
import {
  encodeValgToUrlParams,
  useDecodeUrlParamsToValg,
} from "../utils/encodeValgToUrlParams";
import { groupArray } from "../utils/groupArray";
import { useList } from "../utils/useList";

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
    "warning warning warning"
    "liste liste liste"
    "knapper knapper knapper";

  @media (max-width: ${desktopMinWidth}) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 3rem 1rem;
    grid-template-areas:
      "header koffert"
      "warning warning"
      "valg valg "
      "liste liste"
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
  const { list, updateList } = useList(listeNavn, valg);
  const alleElementer = getAlleTing(valg);

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

  const elementeriKategorier = groupArray(
    alleElementer,
    (it) => Kategori[it.kategori],
  );

  const progress = list
    ? Math.floor(
        (list.checked.length * 100) /
          (alleElementer.length + list.ekstraItems.length),
      )
    : 0;

  const toggleItem = (item: string) => {
    const checkedItems = list.checked ?? [];
    const newCheckedItems = checkedItems.includes(item)
      ? checkedItems.filter((checkedItem) => checkedItem !== item)
      : [...checkedItems, item];
    updateList({ checked: newCheckedItems });
  };

  const setItems = (items: string[]) =>
    updateList({ checked: [...list.checked, ...items] });

  const removeItems = (items: string[]) =>
    updateList({
      checked: list.checked.filter(
        (checkedItem) => !items.includes(checkedItem),
      ),
    });

  const clearList = () => updateList({ checked: [] });

  const toggleExtraItem = (item: string) => {
    const extraItems = list?.ekstraItems ?? [];

    const updatedExtraItems = extraItems.includes(item)
      ? extraItems.filter((i) => i !== item)
      : [...extraItems, item];

    updateList({ ekstraItems: updatedExtraItems });
  };

  return (
    <Style>
      <div style={{ gridArea: "header" }}>
        <StyledH1>Pakker {listeNavn && `'${listeNavn}'`}</StyledH1>
        {tilbakeKnapp}
      </div>
      <VisValg valg={valg} />
      <Progress progress={progress} />
      <UgyldigLocalStorage
        ekstraItems={list.ekstraItems}
        checked={list.checked}
        alleElementer={alleElementer}
        removeItems={removeItems}
      />
      <KategoriListe>
        {elementeriKategorier.map((kategori) => (
          <li key={kategori.category}>
            <KategoriMarkup
              kategori={kategori}
              checkedItems={list?.checked ?? []}
              toggleItem={toggleItem}
              setItems={setItems}
              removeItems={removeItems}
            />
          </li>
        ))}
        <li>
          <ExtraItems
            checkedItems={list?.checked ?? []}
            ekstraTing={list?.ekstraItems ?? []}
            toggleItem={toggleItem}
            setItems={setItems}
            removeItems={removeItems}
            toggleExtraItem={toggleExtraItem}
          />
        </li>
      </KategoriListe>
      <Bunnknapper navn={listeNavn} clearPakkestatus={clearList} />
    </Style>
  );
}

export default Pakk;
