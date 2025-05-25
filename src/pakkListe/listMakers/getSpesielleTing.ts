import {
  skalBæreTungSekk,
  skalGåPåTur,
} from "../../hjelpefunksjoner/aktivitet";
import { overnatteUkjentSted } from "../../hjelpefunksjoner/overnatting";
import { Aktivitet, IValg, Item, Kategori, Sesong } from "../../utils/types";
import { stringArrayToItems } from "./utils";

export function getSpesielleTing(valg: IValg): Item[] {
  let ting: string[] = [];

  if (!valg.idaBehov) return [];

  if (skalBæreTungSekk(valg.aktiviteter)) {
    ting.push("Hoftegnagsårbeskytter");
  }

  if (overnatteUkjentSted(valg.overnatting) && valg.sesong === Sesong.Vinter) {
    ting.push("Termos");
  }

  if (skalGåPåTur(valg.aktiviteter) && valg.sesong === Sesong.Vinter) {
    ting.push("Varmeposer");
  }

  if (
    [Aktivitet.Jogging, Aktivitet.Tradklatring].some((a) =>
      valg.aktiviteter.includes(a),
    )
  ) {
    ting.push("Løpebelte");
  }

  return stringArrayToItems(ting, Kategori.Div);
}
