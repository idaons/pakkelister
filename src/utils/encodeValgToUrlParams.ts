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

interface Returns {
  valg: Valg;
  error?: Error;
  feilmelding?: string;
  listeNavn?: string;
  key: string;
}

export function useDecodeUrlParamsToValg(): Returns {
  const query = useRouter().query as Record<string, string>;
  try {
    const params: Params = JSON.parse(query.params);
    const liste = params.listeNavn;

    return {
      valg: {
        aktiviteter: params.valg.aktiviteter ?? defaultValg.aktiviteter,
        lengde: params.valg.lengde ?? defaultValg.lengde,
        kjønn: params.valg.kjønn ?? defaultValg.kjønn,
        overnatting: params.valg.overnatting ?? defaultValg.overnatting,
        sesong: params.valg.sesong ?? defaultValg.sesong,
        spesielleBehov:
          params.valg.spesielleBehov ?? defaultValg.spesielleBehov,
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
