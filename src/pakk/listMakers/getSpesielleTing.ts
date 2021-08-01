import { Kategori } from "../../models/kategori";
import {
  Aktivitet,
  skalBæreTungSekk,
  skalGåPåTur,
} from "../../models/aktivitet";
import { Valg } from "../../models/valg";
import { Item } from "../../models/liste";
import { stringArrayToItems } from "./utils";
import { Sesong } from "../../models/sesong";
import { overnatteUkjentSted, Overnatting } from "../../models/overnatting";

export function getSpesielleTing(valg: Valg): Item[] {
  let ting: string[] = [];

  if (skalBæreTungSekk(valg.aktiviteter)) {
    ting.push("Hoftegnagsårbeskytter");
  }

  if (overnatteUkjentSted(valg.overnatting) && valg.sesong === Sesong.Vinter) {
    ting.push("Termos");
  }

  if (skalGåPåTur(valg.aktiviteter)) {
    if (valg.sesong === Sesong.Vinter) {
      ting.push("Varmeposer");
    } else if (valg.sesong === Sesong.Sommer) {
      ting.push("Sitteunderlag");
    }
  }

  if (valg.aktiviteter.includes(Aktivitet.Jogging)) {
    ting.push("Løpebelte");
  }

  if (valg.overnatting.includes(Overnatting.FamilieHytte)) {
    ting.push("Hodetelefoner");
  }

  return stringArrayToItems(ting, Kategori.Div);
}
