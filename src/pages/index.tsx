import * as React from "react";
import { useEffect, useReducer, useState } from "react";
import SesongValg from "../lagListe/valg/SesongValg";
import AktiviteterValg from "../lagListe/valg/AktiviteterValg";
import OvernattingValg from "../lagListe/valg/Overnatting";
import KjonnValg from "../lagListe/valg/KjonnValg";
import CustomValg from "../lagListe/valg/CustomValg";
import LengdeValg from "../lagListe/valg/LengdeValg";
import { UnmountClosed } from "react-collapse";
import LinkButton from "../utils/baseComponents/LinkButton";
import {
  encodeValgToUrlParams,
  useDecodeUrlParamsToValg,
} from "../utils/encodeValgToUrlParams";
import TextInput from "../utils/baseComponents/TextInput";
import Button from "../utils/baseComponents/Button";
import Radio from "../utils/baseComponents/Radio";
import { defaultValg } from "../lagListe/valg/defaultValg";
import styled from "styled-components";
import { PakkeAppLocalStorage } from "../utils/localStorage";
import { Valg } from "../models/valg";

const StyledForm = styled.form`
  border: 0.2em white solid;
  border-radius: 1rem;
  overflow: hidden;
  min-height: 100vh;
  background-color: #333;
  box-shadow: 0 0.5rem 1rem #0004;

  > *:nth-child(even) {
    background-color: darkslategray;
  }
`;

const StyledH1 = styled.h1`
  padding: 2rem 2rem 0;
  font-size: 2.5rem;
  margin: 0 0 0.6em;
`;

export const Valggruppe = styled.div`
  padding: 1rem 2rem;
  transition: background-color 0.5s;

  h2 {
    margin: 0 0 0.5rem;
  }

  button {
    margin-top: 1rem;
  }
`;

export const InputGruppe = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 0.4rem 2rem 0.4rem 0;
  }
`;

const Opprett = styled.div`
  padding: 2rem;
`;

function reducer(state: Valg, update: Partial<Valg>): Valg {
  return {
    ...state,
    ...update,
  };
}

export default function Index() {
  const [valg, updateValg] = useReducer(reducer, defaultValg);
  const [listeNavn, setListeNavn] = useState<string | undefined>("");
  const [valgtListe, setValgtListe] = useState<string>("");
  const [brukEksisterendeListe, setBrukEksisterendeListe] =
    useState<boolean>(false);

  const urlParams = useDecodeUrlParamsToValg();
  useEffect(() => {
    updateValg(urlParams.valg);
    setListeNavn(urlParams.listeNavn);
  }, [urlParams.key]);

  const onNyEllerEksisterendeRadioChanged = () => {
    setBrukEksisterendeListe(!brukEksisterendeListe);
    setListeNavn("");
    setValgtListe("");
    updateValg(defaultValg);
  };

  const onListeValgt = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValgtListe(e.currentTarget.value);

    // oppdater verdier
    const valg = PakkeAppLocalStorage.getList(e.currentTarget.value)?.valg;
    if (!valg) return;
    setListeNavn(e.currentTarget.value);
    updateValg(valg);
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledH1>Tid for å pakke</StyledH1>
      <Valggruppe>
        <InputGruppe>
          <Radio
            label="Lag ny liste"
            checked={!brukEksisterendeListe}
            onChange={onNyEllerEksisterendeRadioChanged}
            name="nyEllerEksisterende"
            value="ny"
          />
          <Radio
            label="Endre gammel liste"
            checked={brukEksisterendeListe}
            onChange={onNyEllerEksisterendeRadioChanged}
            name="nyEllerEksisterende"
            value="eksisterende"
          />
        </InputGruppe>
      </Valggruppe>
      {brukEksisterendeListe ? (
        <Valggruppe>
          <label>Velg liste</label>
          <InputGruppe>
            {PakkeAppLocalStorage.getLists().map(
              (liste) =>
                liste.listeNavn && (
                  <Button
                    key={liste.listeNavn}
                    value={liste.listeNavn}
                    onClick={onListeValgt}
                  >
                    {liste.listeNavn}
                  </Button>
                )
            )}
          </InputGruppe>
        </Valggruppe>
      ) : (
        <Valggruppe>
          <TextInput
            label="Navn på liste"
            onChange={(e) => setListeNavn(e.target.value)}
            value={listeNavn}
          />
        </Valggruppe>
      )}
      {(!brukEksisterendeListe || valgtListe) && (
        <>
          <SesongValg
            sesong={valg.sesong}
            setSesong={(sesong) => updateValg({ sesong })}
          />
          <OvernattingValg
            overnatting={valg.overnatting}
            setOvernatting={(overnatting) => updateValg({ overnatting })}
          />
          <UnmountClosed isOpened={valg.overnatting.length > 0}>
            <LengdeValg
              lengde={valg.lengde}
              setLengde={(lengde) => updateValg({ lengde })}
            />
          </UnmountClosed>
          <AktiviteterValg
            valgteAktiviteter={valg.aktiviteter}
            setAktiviteter={(aktiviteter) => updateValg({ aktiviteter })}
          />
          <KjonnValg
            kjønn={valg.kjønn}
            setKjønn={(kjønn) => updateValg({ kjønn })}
          />
          <CustomValg
            spesielleBehov={valg.spesielleBehov}
            setSpesielleBehov={(spesielleBehov) =>
              updateValg({ spesielleBehov })
            }
          />
          <Opprett>
            <LinkButton
              href={`/pakk?${encodeValgToUrlParams(valg, listeNavn)}`}
            >
              Pakk
            </LinkButton>
          </Opprett>
        </>
      )}
    </StyledForm>
  );
}
