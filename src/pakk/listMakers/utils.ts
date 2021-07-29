import { Valg } from "../../models/valg";
import { Sesong } from "../../models/sesong";
import { Aktivitet } from "../../models/aktivitet";
import { Item } from "../../models/liste";
import { Kategori } from "../../models/kategori";

export function overnatting(valg: Valg) {
  return valg.overnatting.length > 0;
}

export function sikkerhetVinter(valg: Valg) {
  return (
    valg.sesong === Sesong.Vinter ||
    [Aktivitet.Randonée, Aktivitet.Fjellski].some((it) =>
      valg.aktiviteter.includes(it)
    )
  );
}

export function stringArrayToItems(
  array: string[],
  kategori: Kategori,
  antall?: number
): Item[] {
  return array.map((ting) => ({
    navn: ting,
    antall: antall || 1,
    kategori: kategori,
  }));
}

export interface TingMedAntall {
  [name: string]: number;
}

export function objektMedAntallTilItems(
  object: TingMedAntall,
  kategori: Kategori
): Item[] {
  return Object.entries(object).map((ting) => ({
    navn: ting[0],
    antall: ting[1],
    kategori: kategori,
  }));
}
