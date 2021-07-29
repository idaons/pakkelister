import styled from "styled-components";
import Checkbox from "../utils/baseComponents/Checkbox";
import * as React from "react";
import { ArrayGroup } from "../utils/groupArray";
import { Item } from "../models/liste";

interface Props {
  kategori: ArrayGroup<Item>;
  checkedItems: string[];
  updateCheckedItems: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCheckedItems: (items: string[]) => void;
}

export const TingListe = styled.ul`
  > li {
    margin-bottom: 0.3em;
  }
  list-style-type: none;
  padding-left: 0;
`;

function KategoriMarkup(props: Props) {
  const updateCatogery = () => {
    const allChecked = props.kategori.items.every((it) =>
      props.checkedItems.includes(it.navn)
    );
    const filteredCheckedItems = props.checkedItems.filter(
      (it) => !props.kategori.items?.some((item) => item.navn === it)
    );
    if (allChecked) {
      props.setCheckedItems(filteredCheckedItems);
    } else {
      props.setCheckedItems([
        ...filteredCheckedItems,
        ...props.kategori.items.map((it) => it.navn),
      ]);
    }
  };

  return (
    <>
      <Checkbox
        checked={props.kategori.items.every((it) =>
          props.checkedItems.includes(it.navn)
        )}
        header={true}
        strikeThrough
        label={props.kategori.category}
        onChange={updateCatogery}
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
              onChange={props.updateCheckedItems}
            />
          </li>
        ))}
      </TingListe>
    </>
  );
}

export default KategoriMarkup;
