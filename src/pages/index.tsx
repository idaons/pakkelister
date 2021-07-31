import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";
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
import {
  useDecodeUrlParamsToValg,
  encodeValgToUrlParams,
} from "../utils/encodeValgToUrlParams";
import TextInput from "../utils/baseComponents/TextInput";
import Button from "../utils/baseComponents/Button";
import Radio from "../utils/baseComponents/Radio";
import { defaultValg } from "../lagListe/valg/defaultValg";
import styled from "styled-components";
import { PakkeAppLocalStorage } from "../utils/localStorage";

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
  const [sesong, setSesong] = useState<Sesong>(defaultValg.sesong);
  const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>(
    defaultValg.aktiviteter
  );
  const [overnatting, setOvernatting] = useState<Overnatting[]>(
    defaultValg.overnatting
  );
  const [kjønn, setKjønn] = useState<Kjonn>(defaultValg.kjønn);
  const [lengde, setLengde] = useState<number>(defaultValg.lengde);
  const [spesielleBehov, setSpesielleBehov] = useState<boolean>(
    defaultValg.spesielleBehov
  );

  const [listeNavn, setListeNavn] = useState<string | undefined>("");
  const [valgtListe, setValgtListe] = useState<string>("");
  const [endreEksisterende, setEndreEksisterende] = useState<boolean>(false);

  const urlParams = useDecodeUrlParamsToValg();
  useEffect(() => {
    setSesong(urlParams.valg.sesong);
    setAktiviteter(urlParams.valg.aktiviteter);
    setOvernatting(urlParams.valg.overnatting);
    setKjønn(urlParams.valg.kjønn);
    setLengde(urlParams.valg.lengde);
    setSpesielleBehov(urlParams.valg.spesielleBehov);
    setListeNavn(urlParams.listeNavn);
  }, [urlParams.key]);

  useEffect(() => {
    if (endreEksisterende) {
      const listeKnapp = document.getElementById("knapp_" + listeNavn);
      if (listeKnapp) {
        listeKnapp.click();
        listeKnapp.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (!endreEksisterende) {
      setValgtListe("");
    }
  }, [endreEksisterende]);

  const onNyEllerEksisterendeRadioChanged = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setEndreEksisterende(!endreEksisterende);

    // Nullstill verdier
    const valg = defaultValg;
    setListeNavn("");
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
    const valg = PakkeAppLocalStorage.getList(e.currentTarget.value)?.valg;
    if (!valg) return;
    setListeNavn(e.currentTarget.value);

    setSesong(valg.sesong);
    setAktiviteter(valg.aktiviteter);
    setOvernatting(valg.overnatting);
    setKjønn(valg.kjønn);
    setLengde(valg.lengde);
    setSpesielleBehov(valg.spesielleBehov);
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
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
            {PakkeAppLocalStorage.getLists().map((liste) => (
              <Button
                key={liste.listeNavn}
                id={"knapp_" + liste.listeNavn}
                value={liste.listeNavn}
                onClick={onListeValgt}
              >
                {liste.listeNavn || "Liste"}
              </Button>
            ))}
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
              href={`/pakk?${encodeValgToUrlParams(
                {
                  sesong,
                  aktiviteter,
                  overnatting,
                  kjønn,
                  lengde,
                  spesielleBehov,
                },
                listeNavn
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
