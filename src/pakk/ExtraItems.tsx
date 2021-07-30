import styled from "styled-components";
import Checkbox from "../utils/baseComponents/Checkbox";
import Button from "../utils/baseComponents/Button";
import Soppelkasse from "../ikoner/Soppelkasse";
import * as React from "react";
import { smallMobileMaxWidth } from "../commonStyles";
import { useState } from "react";
import { TingListe } from "./KategoriMarkup";
import TextInput from "../utils/baseComponents/TextInput";

const EkstravalgWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${smallMobileMaxWidth}) {
    flex-direction: column;
  }

  input {
    max-width: 10rem;
  }

  button {
    margin-left: 0.5rem;

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

  &:hover,
  &:focus {
    transform: scale(1.4);
  }
`;

interface Props {
  ekstraTing: string[];
  checkedItems: string[];
  setEkstraTing: (ting: string[]) => void;
  setCheckedItems: (items: string[]) => void;
  updateCheckedItems: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ExtraItems(props: Props) {
  const [currentEkstraVerdi, setCurrentEkstraVerdi] = useState<string>("");

  const removeEkstraItem = (value: string) => {
    const tmp = props.ekstraTing.filter((item) => item !== value);
    props.setEkstraTing(tmp);
  };

  const leggTilEkstra = () => {
    if (currentEkstraVerdi === "") {
      return;
    }
    props.setEkstraTing([...props.ekstraTing, currentEkstraVerdi]);
    setCurrentEkstraVerdi("");
  };

  const onEkstraChecked = () => {
    const allChecked = props.ekstraTing.every((it) =>
      props.checkedItems.includes(it)
    );
    const filteredCheckedItems = props.checkedItems.filter(
      (it) => !props.ekstraTing?.includes(it)
    );
    if (allChecked) {
      props.setCheckedItems(filteredCheckedItems);
    } else {
      props.setCheckedItems([...filteredCheckedItems, ...props.ekstraTing]);
    }
  };

  return (
    <>
      <Checkbox
        header={true}
        strikeThrough
        label="Ekstra"
        checked={props.ekstraTing.every((it) =>
          props.checkedItems.includes(it)
        )}
        onChange={onEkstraChecked}
      />
      <TingListe>
        <EkstravalgWrapper>
          <TextInput
            label="Ekstra ting"
            value={currentEkstraVerdi}
            onChange={(e) => setCurrentEkstraVerdi(e.target.value)}
          />
          <Button onClick={leggTilEkstra}>+ Legg til</Button>
        </EkstravalgWrapper>
        {props.ekstraTing.map((element) => (
          <li key={element}>
            <Checkbox
              value={element}
              label={element}
              checked={props.checkedItems.includes(element)}
              strikeThrough={true}
              onChange={props.updateCheckedItems}
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
    </>
  );
}

export default ExtraItems;
