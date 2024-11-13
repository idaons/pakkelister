import styled from "styled-components";
import Checkbox from "../ui/Checkbox";
import * as React from "react";
import { ArrayGroup } from "../utils/groupArray";
import { Item } from "../utils/types";

interface Props {
  kategori: ArrayGroup<Item>;
  checkedItems: string[];
  toggleItem: (item: string) => void;
  setItems: (items: string[]) => void;
  removeItems: (items: string[]) => void;
}

export const TingListe = styled.ul`
  > li {
    margin-bottom: 0.3em;
  }
  list-style-type: none;
  padding-left: 0;
`;

function KategoriMarkup(props: Props) {
  const allChecked = props.kategori.items.every((it) =>
    props.checkedItems.includes(it.navn),
  );

  const toggleAll = () => {
    const itemNames = props.kategori.items.map((it) => it.navn);
    if (allChecked) {
      props.removeItems(itemNames);
    } else {
      props.setItems(itemNames);
    }
  };

  return (
    <>
      <Checkbox
        checked={allChecked}
        header={true}
        strikeThrough
        label={props.kategori.category}
        onChange={toggleAll}
      />
      <TingListe>
        {props.kategori.items.map((element) => (
          <li key={element.navn}>
            <Checkbox
              value={element.navn}
              label={
                (element.antall > 1 ? element.antall + " " : "") + element.navn
              }
              checked={props.checkedItems.includes(element.navn)}
              strikeThrough={true}
              onChange={() => props.toggleItem(element.navn)}
            />
          </li>
        ))}
      </TingListe>
    </>
  );
}

export default KategoriMarkup;
