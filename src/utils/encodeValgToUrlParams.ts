import { Valg } from "../models/valg";
import { defaultValg } from "../opprettListe/defaultValg";
import { useRouter } from "next/router";
import { Aktivitet } from "../models/aktivitet";
import { Sesong } from "../models/sesong";
import { Overnatting } from "../models/overnatting";
import { Kjonn } from "../models/kjonn";
import { Modify } from "./typeUtils";

export type StringifiedValg = Modify<
  Valg,
  {
    sesong: string;
    aktiviteter: string[];
    overnatting: string[];
    kjønn: string;
  }
>;

type Params = { valg: StringifiedValg; listeNavn?: string };

// For å gjøre url og local-storage mer human-readable oversettes enum'er til strings slik at det står feks "Klatring" istedenfor "2"
export function stringifyValg(valg: Valg): StringifiedValg {
  return {
    ...valg,
    aktiviteter: valg.aktiviteter.map((it) => Aktivitet[it]),
    sesong: Sesong[valg.sesong],
    overnatting: valg.overnatting.map((it) => Overnatting[it]),
    kjønn: Kjonn[valg.kjønn],
  };
}

// For å gjøre url og local-storage mer human-readable oversettes enum'er til strings slik at det står feks "Klatring" istedenfor "2"
export function unStringifyValg(valg: StringifiedValg): Valg {
  return {
    ...defaultValg,
    ...valg,
    aktiviteter: valg.aktiviteter.map((it) => Aktivitet[it]),
    sesong: Sesong[valg.sesong],
    overnatting: valg.overnatting.map((it) => Overnatting[it]),
    kjønn: Kjonn[valg.kjønn],
  };
}

export function encodeValgToUrlParams(valg: Valg, listeNavn?: string) {
  const params: Params = {
    valg: stringifyValg(valg),
    listeNavn,
  };

  return `params=${JSON.stringify(params)}`;
}

interface DecodedUrlParams {
  valg: Valg;
  error?: Error;
  feilmelding?: string;
  listeNavn?: string;
  key: string;
}

export function useDecodeUrlParamsToValg(): DecodedUrlParams {
  const query = useRouter().query as Record<string, string>;
  try {
    const params: Params = JSON.parse(query.params);
    const liste = params.listeNavn;

    return {
      valg: unStringifyValg(params.valg),
      listeNavn: liste,
      key: JSON.stringify(params),
    };
  } catch (e: any) {
    return {
      error: e,
      feilmelding: "Det skjedde en feil under parsing av params",
      valg: defaultValg,
      listeNavn: "",
      key: "error",
    };
  }
}
