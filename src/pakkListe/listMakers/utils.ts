import { IValg, Sesong, Aktivitet, Item, Kategori } from "../../utils/types";

export function overnatting(valg: IValg) {
  return valg.overnatting.length > 0;
}

export function sikkerhetVinter(valg: IValg) {
  let trengerSikkerhet = false;
  if (
    valg.sesong === Sesong.Vinter &&
    [
      Aktivitet.Tradklatring,
      Aktivitet.ViaFerrata,
      Aktivitet.Fottur,
      Aktivitet.Tinderangling,
    ].some((it) => valg.aktiviteter.includes(it))
  ) {
    trengerSikkerhet = true;
  }

  if (
    [
      Aktivitet.Randonée,
      Aktivitet.Fjellski,
      Aktivitet.Isbre,
      Aktivitet.Langrenn,
      Aktivitet.Skøyteski,
    ].some((it) => valg.aktiviteter.includes(it))
  ) {
    trengerSikkerhet = true;
  }

  return trengerSikkerhet;
}

export function stringArrayToItems(
  array: string[],
  kategori: Kategori,
  antall?: number,
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
  kategori: Kategori,
): Item[] {
  return Object.entries(object).map((ting) => ({
    navn: ting[0],
    antall: ting[1],
    kategori: kategori,
  }));
}

export function overlapp<T>(array1: T[], array2: T[]): boolean {
  return array2.some((it) => array1.includes(it));
}
