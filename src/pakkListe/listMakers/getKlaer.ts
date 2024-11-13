import { objektMedAntallTilItems, overnatting, TingMedAntall } from "./utils";
import {
  Aktivitet,
  IValg,
  Kategori,
  Kjonn,
  Overnatting,
} from "../../utils/types";
import { Sesong } from "../../utils/types";
import { Item } from "../../utils/types";
import { skalGåPåTur } from "../../hjelpefunksjoner/aktivitet";

export function getKlaer(valg: IValg): Item[] {
  let klær: TingMedAntall = {};

  const skalVæreInneBlantFolk =
    valg.overnatting.includes(Overnatting.HusHotell) ||
    valg.overnatting.includes(Overnatting.FamilieHytte);

  klær = {
    ...klær,
    Fleece: 1,
    Vindjakke: 1,
    Vindbukse: 1,
    Dunjakke: 1,
    Hansker: 1,
    Hals: 2,
  };

  if (valg.sesong === Sesong.Vinter) {
    klær = {
      ...klær,
      Ulltrøye: 2,
      Votter: 1,
      Vindvotter: 1,
      Brynje: 1,
      Ullsokker: 3,
      Lue: 2,
      Stilongs: 1,
    };

    if (valg.kjønn !== Kjonn.Mann) {
      klær = {
        ...klær,
        Dunskjørt: 1,
        ["Ull-BH"]: 1,
      };
    }
  }

  if (valg.sesong === Sesong.Sommer) {
    klær = {
      ...klær,
      Ulltrøye: 1,
      Shorts: 1,
      Bukse: 1,
      Sportssokker: 2,
      Ullsokker: 1,
      ["T-skjorte"]: 2,
      Badetøy: 1,
      Caps: 1,
      Lue: 1,
    };

    if (valg.kjønn !== Kjonn.Mann) {
      klær = {
        ...klær,
        ["Sports-BH"]: 1,
        Singlet: 1,
      };
    }
  }

  if (valg.aktiviteter.includes(Aktivitet.Bytur)) {
    klær = {
      ...klær,
      ["By-outfit"]: 1,
    };
  }

  if (valg.aktiviteter.includes(Aktivitet.Jogging)) {
    klær = {
      ...klær,
      Treningstøy: 1,
      Joggesko: 1,
    };
  }
  if (valg.aktiviteter.includes(Aktivitet.Sykkel)) {
    klær = {
      ...klær,
      Sykkelshort: 1,
    };
  }

  if (overnatting(valg)) {
    klær = {
      ...klær,
      Truser: Math.ceil(valg.lengde / 1.5),
    };
  }

  if (valg.idaBehov) {
    if (skalVæreInneBlantFolk) {
      klær = {
        ...klær,
        Innesokker: Math.ceil(valg.lengde / 4),
        Innebukse: 1,
        ["T-skjorte for innebruk"]: Math.ceil(valg.lengde / 4),
      };

      if (valg.kjønn !== Kjonn.Mann) {
        klær = {
          ...klær,
          ["BH"]: 1,
        };
      }
    }

    if (skalGåPåTur(valg.aktiviteter)) {
      klær = {
        ...klær,
        Gnagsårsokk: 1,
      };

      if (valg.sesong === Sesong.Vinter) {
        klær = {
          ...klær,
          Pulsvarmer: 1,
          Dampsperresokk: 1,
        };
      }
    }
  }

  return objektMedAntallTilItems(klær, Kategori.Klær);
}
