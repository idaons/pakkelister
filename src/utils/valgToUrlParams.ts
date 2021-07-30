import { Valg } from "../models/valg";
import { Aktivitet } from "../models/aktivitet";
import { Kjonn } from "../models/kjonn";
import { Overnatting } from "../models/overnatting";
import { Sesong } from "../models/sesong";
import { defaultValg } from "../lagListe/valg/defaultValg";

export function valgToUrlParams(valg: Valg, liste: String) {
  const aktiviteter =
    "aktiviteter=" +
    valg.aktiviteter.map((aktivitet) => `${Aktivitet[aktivitet]}`).join(",");
  const lengde = "lengde=" + valg.lengde;
  const kjønn = "kjønn=" + Kjonn[valg.kjønn];
  const overnatting =
    "overnatting=" +
    valg.overnatting
      .map((overnatting) => `${Overnatting[overnatting]}`)
      .join(",");
  const sesong = "sesong=" + Sesong[valg.sesong];
  const spesiell = "spesiell=" + valg.spesielleBehov;
  const currentListe = "liste=" + liste;

  return [
    aktiviteter,
    lengde,
    kjønn,
    overnatting,
    sesong,
    spesiell,
    currentListe,
  ].join("&");
}

interface Returns {
  valg: Valg;
  error?: Error;
  feilmelding?: string;
  currentListe: string;
}

export function decodeUrlParams(params: Record<string, string>): Returns {
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

    const liste = params.liste;

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
      currentListe: liste,
    };
  } catch (e) {
    return {
      error: e,
      feilmelding: "Det skjedde en feil under parsing av params",
      valg: defaultValg,
      currentListe: "",
    };
  }
}
