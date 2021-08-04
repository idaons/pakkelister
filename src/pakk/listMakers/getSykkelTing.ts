import { Kategori } from "../../models/kategori";
import { Aktivitet } from "../../models/aktivitet";
import { Valg } from "../../models/valg";
import { Item } from "../../models/liste";
import { stringArrayToItems } from "./utils";

export function getSykkelTing(valg: Valg): Item[] {
  if (!valg.aktiviteter.includes(Aktivitet.Sykkel)) {
    return [];
  }

  const sykkelTing = ["Sykkelhjelm", "Sykkelveske", "Lappesaker", "Sykkelsko"];

  return stringArrayToItems(sykkelTing, Kategori.Sykkel);
}
