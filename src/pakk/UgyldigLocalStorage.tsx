import * as React from "react";
import styled from "styled-components";
import Button from "../utils/baseComponents/Button";

const Style = styled.div`
  color: #e8e862;
  grid-area: warning;
  strong {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

const KnappeGruppe = styled.div`
  display: flex;
  margin-top: 1rem;
  column-gap: 1rem;
`;

interface Props {
  handleUgyldigLocalStorage: (skalFjernes: boolean) => void;
  ugyldigeElementer: string[];
}
const UgyldigLocalStorage = (props: Props) => {
  return (
    <Style>
      <strong>NB!</strong>
      {` Følgende elementer er markert som pakket i  local storage, men de finnes 
      ikke i nåværende pakkeliste: ${props.ugyldigeElementer.join(", ")}
       . Vil du fjerne de fra local storage?`}
      <KnappeGruppe>
        <Button onClick={() => props.handleUgyldigLocalStorage(true)}>
          JA! 🥳
        </Button>
        <Button onClick={() => props.handleUgyldigLocalStorage(false)}>
          Næsj 👎️
        </Button>
      </KnappeGruppe>
    </Style>
  );
};
export default UgyldigLocalStorage;
