import styled from "styled-components";
import TextInput from "../../utils/baseComponents/TextInput";
import { PakkeAppLocalStorage } from "../../utils/localStorage";
import Button from "../../utils/baseComponents/Button";
import * as React from "react";
import { InputGruppe } from "../../pages";
import { Valg } from "../../models/valg";
import ValgStyle from "./ValgStyle";

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem 2rem;
`;

const StyledTextinput = styled(TextInput)`
  align-self: start;
`;

interface Props {
  listeNavn?: string;
  setListeNavn: (navn: string) => void;
  updateValg: (valg: Valg) => void;
}

function VelgListe(props: Props) {
  const onListeValgt = (e: React.MouseEvent<HTMLButtonElement>) => {
    const valg = PakkeAppLocalStorage.getList(e.currentTarget.value)?.valg;
    if (!valg) return;
    props.setListeNavn(e.currentTarget.value);
    props.updateValg(valg);
  };

  const eksisterendeLister = PakkeAppLocalStorage.getLists();

  return (
    <ValgStyle name="Listenavn">
      <FlexCol>
        <StyledTextinput
          label="Ny liste"
          onChange={(e) => props.setListeNavn(e.target.value)}
          value={props.listeNavn}
        />
        {eksisterendeLister.length !== 0 && (
          <>
            <div>...eller bruk eksisterende liste:</div>
            <InputGruppe>
              {eksisterendeLister.map(
                (liste) =>
                  liste.listeNavn && (
                    <Button
                      key={liste.listeNavn}
                      value={liste.listeNavn}
                      onClick={onListeValgt}
                      style={
                        liste.listeNavn === props.listeNavn
                          ? { borderColor: "gold" }
                          : undefined
                      }
                    >
                      {liste.listeNavn}
                    </Button>
                  )
              )}
            </InputGruppe>
          </>
        )}
      </FlexCol>
    </ValgStyle>
  );
}

export default VelgListe;
