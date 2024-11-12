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
import { overnatteUkjentSted } from "../../models/overnatting";

export function getSpesielleTing(valg: Valg): Item[] {
  let ting: string[] = [];

  if (valg.idaBehov) {
    if (skalBæreTungSekk(valg.aktiviteter)) {
      ting.push("Hoftegnagsårbeskytter");
    }

    if (
      overnatteUkjentSted(valg.overnatting) &&
      valg.sesong === Sesong.Vinter
    ) {
      ting.push("Termos");
    }

    if (skalGåPåTur(valg.aktiviteter) && valg.sesong === Sesong.Vinter) {
      ting.push("Varmeposer");
    }

    if (valg.aktiviteter.includes(Aktivitet.Jogging)) {
      ting.push("Løpebelte");
    }
  }

  return stringArrayToItems(ting, Kategori.Div);
}
