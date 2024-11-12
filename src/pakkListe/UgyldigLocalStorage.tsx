import * as React from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import { Item } from "../models/liste";

const Style = styled.div`
  color: #e8e862;
  grid-area: warning;

  strong {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  margin-top: 1rem;
`;

// Split liste fra localstorage i gylde elementer og ugyldige elementer
function splitArray(array, isValid) {
  return array.reduce(
    ([pass, fail], elem) => {
      if (isValid(elem)) {
        return [[...pass, elem], fail];
      } else {
        return [pass, [...fail, elem]];
      }
    },
    [[], []],
  );
}

interface Props {
  alleElementer: Item[];
  ekstraItems: string[];
  checked: string[];
  setChecked: (items: string[]) => void;
}

const UgyldigLocalStorage = (props: Props) => {
  const alleTing = props.alleElementer
    .map((element) => element.navn)
    .concat(props.ekstraItems);

  const [gyldigeElementer, ugyldigeElementer] = splitArray(
    props.checked.concat(),
    (e) => alleTing.includes(e),
  );

  const handleUgyldigLocalStorage = () => {
    props.setChecked(gyldigeElementer);
  };

  if (ugyldigeElementer.length === 0) {
    return null;
  }

  return (
    <Style>
      <strong>NB!</strong>
      <span>
        Fant noen ting som er markert som pakket, men de finnes ikke lenger i
        nåværende pakkeliste:
      </span>
      <ul>
        {ugyldigeElementer.map((it) => (
          <li>{it}</li>
        ))}
      </ul>
      <span>
        Hvis du ikke fjerner de vil du få over 100% pakket når du har pakket
        alt. Vil du fjerne de fra local storage så det blir riktig?
      </span>
      <StyledButton onClick={handleUgyldigLocalStorage}>
        JA, FJERN! 🥳
      </StyledButton>
    </Style>
  );
};
export default UgyldigLocalStorage;
