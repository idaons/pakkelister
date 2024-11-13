import { Aktivitet, Item, IValg, Kategori } from "../../utils/types";
import { objektMedAntallTilItems } from "./utils";

export function getIsbreTing(valg: IValg): Item[] {
  if (!valg.aktiviteter.includes(Aktivitet.Isbre)) {
    return [];
  }

  let isbreTing = {
    Isøks: 1,
    Stegjern: 1,
    Tau: 1,
    Klatresele: 1,
    Karabin: 1,
    Skrukarabiner: 2,
    Prusiker: 2,
    "120-slynge": 2,
  };

  return objektMedAntallTilItems(isbreTing, Kategori.TekniskUtstyr);
}
