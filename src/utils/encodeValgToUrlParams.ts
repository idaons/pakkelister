import { Valg } from "../models/valg";
import { defaultValg } from "../lagListe/valg/defaultValg";
import { useRouter } from "next/router";

type Params = { valg: Valg; listeNavn?: string };

export function encodeValgToUrlParams(valg: Valg, listeNavn?: string) {
  const params: Params = {
    valg,
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
      valg: {
        ...defaultValg,
        ...params.valg,
      },
      listeNavn: liste,
      key: JSON.stringify(params),
    };
  } catch (e) {
    return {
      error: e,
      feilmelding: "Det skjedde en feil under parsing av params",
      valg: defaultValg,
      listeNavn: "",
      key: "error",
    };
  }
}
