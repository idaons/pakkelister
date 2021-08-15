import { Kategori } from "../../models/kategori";
import { Valg } from "../../models/valg";
import { objektMedAntallTilItems } from "./utils";
import { Item } from "../../models/liste";
import { Aktivitet } from "../../models/aktivitet";

export function getIsbreTing(valg: Valg): Item[] {
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
