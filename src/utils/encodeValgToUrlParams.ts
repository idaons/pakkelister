import { useRouter } from "next/router";
import { IValg } from "./types";
import { defaultValg } from "../opprettListe/defaultValg";

type Params = { valg: IValg; listeNavn?: string };

export function encodeValgToUrlParams(valg: IValg, listeNavn?: string) {
  const params: Params = {
    valg: valg,
    listeNavn,
  };

  return `params=${JSON.stringify(params)}`;
}

interface DecodedUrlParams {
  valg: IValg;
  error?: Error;
  feilmelding?: string;
  listeNavn: string;
  key: string;
}

const defaultListName = "Min pakkeliste";

export function useDecodeUrlParamsToValg(): DecodedUrlParams {
  const query = useRouter().query as Record<string, string>;
  try {
    const params: Params = JSON.parse(query.params);
    const listeNavn = params.listeNavn || defaultListName;

    return {
      valg: params.valg,
      listeNavn,
      key: JSON.stringify(params),
    };
  } catch (e: any) {
    return {
      error: e,
      feilmelding: "Det skjedde en feil under parsing av params",
      valg: defaultValg,
      listeNavn: defaultListName,
      key: "error",
    };
  }
}
