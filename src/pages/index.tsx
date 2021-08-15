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
import { defaultValg } from "../lagListe/valg/defaultValg";
import styled from "styled-components";
import { Valg } from "../models/valg";
import VelgListe from "../lagListe/valg/VelgListe";

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
`;

export const InputGruppe = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 0.75rem 2rem;
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

  const urlParams = useDecodeUrlParamsToValg();
  useEffect(() => {
    updateValg(urlParams.valg);
    setListeNavn(urlParams.listeNavn);
  }, [urlParams.key]);

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledH1>Tid for å pakke</StyledH1>
      <VelgListe
        listeNavn={listeNavn}
        setListeNavn={setListeNavn}
        updateValg={updateValg}
      />
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
        idaBehov={valg.idaBehov}
        setIdaBehov={(idaBehov) => updateValg({ idaBehov })}
      />
      <Opprett>
        <LinkButton href={`/pakk?${encodeValgToUrlParams(valg, listeNavn)}`}>
          Pakk
        </LinkButton>
      </Opprett>
    </StyledForm>
  );
}
