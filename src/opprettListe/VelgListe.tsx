import styled from "styled-components";
import Button from "../ui/Button";
import * as React from "react";
import { InputGruppe } from "../pages";
import { IValg } from "../utils/types";
import ValgStyle from "./ValgStyle";
import TextInput from "../ui/TextInput";
import { LocalStorageListe, useAllLists } from "../utils/useList";

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
  updateValg: (valg: IValg) => void;
}

function VelgListe(props: Props) {
  const [eksisterendeLister] = useAllLists();

  const onListeValgt = (liste: LocalStorageListe) => {
    if (!liste) return;
    props.setListeNavn(liste.listeNavn);
    props.updateValg(liste.valg);
  };

  return (
    <ValgStyle name="Listenavn">
      <FlexCol>
        <StyledTextinput
          label="Ny liste"
          onChange={(e) => props.setListeNavn(e.target.value)}
          value={props.listeNavn}
        />
        {!!eksisterendeLister?.length && (
          <>
            <div>...eller bruk eksisterende liste:</div>
            <InputGruppe>
              {eksisterendeLister.map(
                (liste) =>
                  liste.listeNavn && (
                    <Button
                      key={liste.listeNavn}
                      value={liste.listeNavn}
                      onClick={() => onListeValgt(liste)}
                      style={
                        liste.listeNavn === props.listeNavn
                          ? { borderColor: "gold" }
                          : undefined
                      }
                    >
                      {liste.listeNavn}
                    </Button>
                  ),
              )}
            </InputGruppe>
          </>
        )}
      </FlexCol>
    </ValgStyle>
  );
}

export default VelgListe;
