import * as React from "react";
import { Aktivitet, IValg, Sesong } from "../utils/types";
import { getKjønnLabel } from "../hjelpefunksjoner/kjonn";
import { overnatting } from "./listMakers/utils";
import { getOvernattingLabel } from "../hjelpefunksjoner/overnatting";
import styled from "styled-components";

interface Props {
  valg: IValg;
}

const Style = styled.div`
  grid-area: valg;
  ul {
    list-style: circle;
    margin: 0.5rem 1.5rem;
    padding: 0;
  }
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0;
    ul {
      margin: 0.5rem 1rem;
    }
  }
`;

function VisValg(props: Props) {
  return (
    <Style>
      <ul>
        <li>{Sesong[props.valg.sesong]}</li>
        <li>{getKjønnLabel(props.valg.kjønn)}</li>
        {overnatting(props.valg) && <li>{props.valg.lengde} dager</li>}
        {props.valg.idaBehov && <li>Ida sine sære ting</li>}
      </ul>
      <ul>
        {props.valg.aktiviteter.map((aktivitet) => (
          <li key={aktivitet}>{Aktivitet[aktivitet]}</li>
        ))}
      </ul>
      <ul>
        {props.valg.overnatting.map((overnatting) => (
          <li key={overnatting}>{getOvernattingLabel(overnatting)}</li>
        ))}
      </ul>
    </Style>
  );
}

export default VisValg;
