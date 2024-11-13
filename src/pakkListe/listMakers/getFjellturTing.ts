import { Aktivitet, Item, Kategori, IValg } from "../../utils/types";
import { stringArrayToItems } from "./utils";

export function getFjellturTing(valg: IValg): Item[] {
  let fjellturTing: string[] = [];

  if (
    ![Aktivitet.Fottur, Aktivitet.Tinderangling].some((it) =>
      valg.aktiviteter.includes(it),
    )
  ) {
    return [];
  }

  fjellturTing.push("Fjellsko");
  fjellturTing.push("Regntrekk til sekk");
  fjellturTing.push("Staver");

  if (valg.idaBehov) {
    fjellturTing.push("Gamasjer");
  }

  return stringArrayToItems(fjellturTing, Kategori.TekniskUtstyr);
}
