import { IValg, Kategori, Aktivitet, Item } from "../../utils/types";
import { stringArrayToItems } from "./utils";

export function getSykkelTing(valg: IValg): Item[] {
  if (!valg.aktiviteter.includes(Aktivitet.Sykkel)) {
    return [];
  }

  const sykkelTing = ["Sykkelhjelm", "Sykkelveske", "Lappesaker", "Sykkelsko"];

  return stringArrayToItems(sykkelTing, Kategori.Sykkel);
}
