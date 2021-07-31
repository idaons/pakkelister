import { Valg } from "../models/valg";
import { Aktivitet } from "../models/aktivitet";
import { Kjonn } from "../models/kjonn";
import { Overnatting } from "../models/overnatting";
import { Sesong } from "../models/sesong";
import { defaultValg } from "../lagListe/valg/defaultValg";
import { useRouter } from "next/router";

export function encodeValgToUrlParams(valg: Valg, liste?: string) {
  const params = {
    aktiviteter: valg.aktiviteter
      .map((aktivitet) => `${Aktivitet[aktivitet]}`)
      .join(","),
    lengde: valg.lengde,
    kjønn: Kjonn[valg.kjønn],
    overnatting: valg.overnatting
      .map((overnatting) => `${Overnatting[overnatting]}`)
      .join(","),
    sesong: Sesong[valg.sesong],
    spesiell: valg.spesielleBehov,
    listeNavn: liste || "",
  };

  return Object.entries(params)
    .map((param) => `${param[0]}=${param[1]}`)
    .join("&");
}

interface Returns {
  valg: Valg;
  error?: Error;
  feilmelding?: string;
  listeNavn: string;
  key: string;
}

export function useDecodeUrlParamsToValg(): Returns {
  const params = useRouter().query as Record<string, string>;
  try {
    const valg: Valg = {
      aktiviteter:
        params.aktiviteter
          ?.split(",")
          .map((it) => Aktivitet[it])
          .filter((it) => it !== undefined) || [],
      lengde:
        params.lengde !== undefined
          ? parseInt(params.lengde)
          : defaultValg.lengde,
      kjønn: Kjonn[params.kjønn],
      overnatting:
        (params.overnatting
          ?.split(",")
          .map((it) => Overnatting[it])
          .filter((it) => it !== undefined) as Overnatting[]) || [],
      sesong: Sesong[params.sesong],
      spesielleBehov: params.spesiell === "true",
    };

    const manglendeParametere = Object.keys(valg).filter(
      (it: string) => valg[it] === undefined
    );
    const feilmelding =
      manglendeParametere.length > 0
        ? `Manglende parametere: ${manglendeParametere}`
        : undefined;

    const liste = params.listeNavn;

    return {
      feilmelding: feilmelding,
      valg: {
        aktiviteter: valg.aktiviteter ?? defaultValg.aktiviteter,
        lengde: valg.lengde ?? defaultValg.lengde,
        kjønn: valg.kjønn ?? defaultValg.kjønn,
        overnatting: valg.overnatting ?? defaultValg.overnatting,
        sesong: valg.sesong ?? defaultValg.sesong,
        spesielleBehov: valg.spesielleBehov ?? defaultValg.spesielleBehov,
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
