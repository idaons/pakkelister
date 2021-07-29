import { Kategori } from "../../models/kategori";
import { Aktivitet } from "../../models/aktivitet";
import { Valg } from "../../models/valg";
import { Item } from "../../models/liste";
import { stringArrayToItems } from "./utils";

export function getKlatreutstyr(valg: Valg): Item[] {
  if (!valg.aktiviteter.includes(Aktivitet.Klatring)) {
    return [];
  }

  const klatreting = [
    "Klatresele",
    "Kortslynger",
    "Tau",
    "Kalkpose",
    "Klatresko",
    "Sikringsutstyr",
    "Via ferrata kit",
    "Hjelm",
  ];

  return stringArrayToItems(klatreting, Kategori.TekniskUtstyr);
}
