import { Aktivitet } from "../../models/aktivitet";
import { Valg } from "../../models/valg";
import { Item } from "../../models/liste";
import { stringArrayToItems } from "./utils";
import { Kategori } from "../../models/kategori";

export function getFjellturTing(valg: Valg): Item[] {
  let fjellturTing: string[] = [];

  if (
    ![Aktivitet.Fottur, Aktivitet.Tinderangling].some((it) =>
      valg.aktiviteter.includes(it)
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
