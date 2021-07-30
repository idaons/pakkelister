import * as React from "react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SesongValg from "../lagListe/valg/SesongValg";
import AktiviteterValg from "../lagListe/valg/AktiviteterValg";
import OvernattingValg from "../lagListe/valg/Overnatting";
import KjonnValg from "../lagListe/valg/KjonnValg";
import CustomValg from "../lagListe/valg/CustomValg";
import { Sesong } from "../models/sesong";
import { Aktivitet } from "../models/aktivitet";
import { Overnatting } from "../models/overnatting";
import { Kjonn } from "../models/kjonn";
import LengdeValg from "../lagListe/valg/LengdeValg";
import { UnmountClosed } from "react-collapse";
import LinkButton from "../utils/baseComponents/LinkButton";
import { decodeUrlParams, valgToUrlParams } from "../utils/valgToUrlParams";
import TextInput from "../utils/baseComponents/TextInput";
import Button from "../utils/baseComponents/Button";
import { getStoredListeNavn, getStoredValg } from "../utils/localStorage";
import Radio from "../utils/baseComponents/Radio";
import { defaultValg } from "../lagListe/valg/defaultValg";
import styled from "styled-components";
import { useUrlQuery } from "../utils/useUrlQuery";

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

export default function Index() {
  const query = useUrlQuery();
  const urlValg = decodeUrlParams(query);
  const [sesong, setSesong] = useState<Sesong>(urlValg.valg.sesong);
  const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>(
    urlValg.valg.aktiviteter
  );
  const [overnatting, setOvernatting] = useState<Overnatting[]>(
    urlValg.valg.overnatting
  );
  const [kjønn, setKjønn] = useState<Kjonn>(urlValg.valg.kjønn);
  const [lengde, setLengde] = useState<number>(urlValg.valg.lengde);
  const [tittel, setTittel] = useState<string>(urlValg.currentListe);
  const [valgtListe, setValgtListe] = useState<string>("");
  const [endreEksisterende, setEndreEksisterende] = useState<boolean>(
    !!urlValg.currentListe
  );
  const [spesielleBehov, setSpesielleBehov] = useState<boolean>(
    urlValg.valg.spesielleBehov
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (endreEksisterende) {
      const listeKnapp = document.getElementById("knapp_" + tittel);
      if (listeKnapp) {
        listeKnapp.click();
        listeKnapp.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (!endreEksisterende) {
      setValgtListe("");
    } else {
    }
  }, [endreEksisterende]);

  const onNyEllerEksisterendeRadioChanged = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setEndreEksisterende(!endreEksisterende);

    // Nullstill verdier
    const valg = defaultValg;
    setTittel("");
    setSesong(valg.sesong);
    setAktiviteter(valg.aktiviteter);
    setOvernatting(valg.overnatting);
    setKjønn(valg.kjønn);
    setLengde(valg.lengde);
    setSpesielleBehov(valg.spesielleBehov);
  };

  const onListeValgt = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValgtListe(e.currentTarget.value);

    // oppdater verdier
    const valg = getStoredValg(e.currentTarget.value);
    if (!valg) return;
    setTittel(e.currentTarget.value);

    setSesong(valg.sesong);
    setAktiviteter(valg.aktiviteter);
    setOvernatting(valg.overnatting);
    setKjønn(valg.kjønn);
    setLengde(valg.lengde);
    setSpesielleBehov(valg.spesielleBehov);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledH1>Tid for å pakke</StyledH1>
      <Valggruppe>
        <InputGruppe>
          <Radio
            label="Lag liste"
            checked={!endreEksisterende}
            onChange={onNyEllerEksisterendeRadioChanged}
            name="nyEllerEksisterende"
            value="ny"
          />
          <Radio
            label="Endre eksisterende"
            checked={endreEksisterende}
            onChange={onNyEllerEksisterendeRadioChanged}
            name="nyEllerEksisterende"
            value="eksisterende"
          />
        </InputGruppe>
      </Valggruppe>
      {endreEksisterende ? (
        <Valggruppe>
          <label>Velg liste</label>
          <InputGruppe>
            {getStoredListeNavn().map((liste) => (
              <Button
                key={liste}
                id={"knapp_" + liste}
                value={liste}
                onClick={onListeValgt}
              >
                {liste}
              </Button>
            ))}
          </InputGruppe>
        </Valggruppe>
      ) : (
        <Valggruppe>
          <TextInput
            label="Navn på liste"
            onChange={(e) => setTittel(e.target.value)}
            value={tittel}
          />
        </Valggruppe>
      )}
      {(!endreEksisterende || valgtListe) && (
        <>
          <SesongValg sesong={sesong} setSesong={setSesong} />
          <OvernattingValg
            overnatting={overnatting}
            setOvernatting={setOvernatting}
          />
          <UnmountClosed isOpened={overnatting.length > 0}>
            <LengdeValg lengde={lengde} setLengde={setLengde} />
          </UnmountClosed>
          <AktiviteterValg
            valgteAktiviteter={aktiviteter}
            setAktiviteter={setAktiviteter}
          />
          <KjonnValg kjønn={kjønn} setKjønn={setKjønn} />
          <CustomValg
            spesielleBehov={spesielleBehov}
            setSpesielleBehov={setSpesielleBehov}
          />
          <Opprett>
            <LinkButton
              href={`/pakk?${valgToUrlParams(
                {
                  sesong,
                  aktiviteter,
                  overnatting,
                  kjønn,
                  lengde,
                  spesielleBehov,
                },
                tittel
              )}`}
            >
              Pakk
            </LinkButton>
          </Opprett>
        </>
      )}
    </StyledForm>
  );
}
