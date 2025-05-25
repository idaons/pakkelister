import { Item, IValg, Kategori, Overnatting } from "../../utils/types";
import { stringArrayToItems } from "./utils";

export function getMatkasse(valg: IValg): Item[] {
  if (
    ![Overnatting.AirBnB, Overnatting.Telt].some((o) =>
      valg.overnatting.includes(o),
    )
  )
    return [];

  const ting = [
    "Kjøkkenkniv",
    "Skjærefjøl",
    "Kjøkkenhåndkle",
    "Salt",
    "Pepper",
    "Sukker og kanel",
    "Honning",
    "Valnøtter",
    "Rosiner",
    "Dronningsjokolade",
    "Havregryn",
    "Knekkebrød",
    "Smør",
    "Svamp",
    "Oppvaskmiddel",
    "Kaffebryggesett",
    "Kaffe",
    "Aluminiumsfolie",
    "Bokser",
    "Matpakkeposer",
    "Kjøkkenrull",
    "Våteservietter",
  ];

  return stringArrayToItems(ting, Kategori.Matkasse);
}
