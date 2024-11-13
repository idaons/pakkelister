import styled from "styled-components";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import Soppelkasse from "../ikoner/Soppelkasse";
import * as React from "react";
import { smallMobileMaxWidth } from "../styles/commonStyles";
import { useState } from "react";
import { TingListe } from "./KategoriMarkup";
import TextInput from "../ui/TextInput";

const EkstravalgWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${smallMobileMaxWidth}) {
    flex-direction: column;
    align-items: flex-start;
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
  toggleExtraItem: (item: string) => void;
  toggleItem: (item: string) => void;
  setItems: (items: string[]) => void;
  removeItems: (items: string[]) => void;
}

function ExtraItems(props: Props) {
  const [input, setInput] = useState<string>("");

  const removeEkstraItem = (value: string) => {
    if (props.checkedItems.includes(value)) props.toggleExtraItem(value);
    if (props.ekstraTing.includes(value)) props.toggleExtraItem(value);
  };

  const leggTilEkstra = () => {
    if (props.ekstraTing.includes(input)) return;
    props.toggleExtraItem(input);
    setInput("");
  };

  const allChecked = props.ekstraTing.every((it) =>
    props.checkedItems.includes(it),
  );

  const toggleAll = () => {
    const itemNames = props.ekstraTing.map((it) => it);
    if (allChecked) {
      props.removeItems(itemNames);
    } else {
      props.setItems(itemNames);
    }
  };

  return (
    <>
      <Checkbox
        header={true}
        strikeThrough
        label="Ekstra"
        checked={allChecked}
        onChange={toggleAll}
      />
      <TingListe>
        <EkstravalgWrapper>
          <TextInput
            label="Ekstra ting"
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
              onChange={() => props.toggleItem(element)}
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
