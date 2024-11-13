import { Aktivitet, IValg, Kategori, Item } from "../../utils/types";
import { stringArrayToItems } from "./utils";

export function getKajakkTing(valg: IValg): Item[] {
  if (!valg.aktiviteter.includes(Aktivitet.Kajakk)) {
    return [];
  }

  const kajakkTing = [
    "Våtdrakt",
    "Våtsko",
    "Tørt skift",
    "Pakkposer",
    "Padleåre",
    "Kajakk",
    "Redningsvest",
    "Spruttrekk",
  ];

  return stringArrayToItems(kajakkTing, Kategori.Kajakk);
}
