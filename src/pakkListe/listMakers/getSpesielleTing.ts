import {
  skalBæreTungSekk,
  skalGåPåTur,
} from "../../hjelpefunksjoner/aktivitet";
import { IValg, Item, Sesong, Aktivitet, Kategori } from "../../utils/types";
import { stringArrayToItems } from "./utils";
import { overnatteUkjentSted } from "../../hjelpefunksjoner/overnatting";

export function getSpesielleTing(valg: IValg): Item[] {
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
