import { getEnumAsArray } from "../utils/enum";

export enum Aktivitet {
  Sportsklatring,
  Tradklatring,
  ViaFerrata,
  Fottur,
  Tinderangling,
  Jogging,
  Randonée,
  Isbre,
  Fjellski,
  Langrenn,
  Skøyteski,
  Bytur,
  Fotografi,
  Kajakk,
}

export function getAktivitetLabel(aktivitet: Aktivitet) {
  let label = "";

  switch (aktivitet) {
    case Aktivitet.ViaFerrata:
      label = "Via Ferrata";
      break;
    default:
      label = Aktivitet[aktivitet];
  }
  return label;
}

export function getAktivitetAsArray(): Aktivitet[] {
  return getEnumAsArray(Aktivitet);
}

export function skalGjoreSommerAktivitet(aktiviteter: Aktivitet[]) {
  return [
    Aktivitet.Sportsklatring,
    Aktivitet.Tradklatring,
    Aktivitet.Fottur,
    Aktivitet.Tinderangling,
    Aktivitet.Jogging,
    Aktivitet.Kajakk,
    Aktivitet.ViaFerrata,
  ].some((it) => aktiviteter.includes(it));
}

export function erVinterAktivitet(aktivitet: Aktivitet) {
  return [
    Aktivitet.Randonée,
    Aktivitet.Fjellski,
    Aktivitet.Langrenn,
    Aktivitet.Skøyteski,
  ].includes(aktivitet);
}

// Todo: spesifisere denne mer
export function skalGåPåTur(aktiviteter: Aktivitet[]) {
  return [
    Aktivitet.Randonée,
    Aktivitet.Fjellski,
    Aktivitet.Langrenn,
    Aktivitet.Skøyteski,
    Aktivitet.Fottur,
    Aktivitet.Tinderangling,
    Aktivitet.Sportsklatring,
    Aktivitet.Tradklatring,
    Aktivitet.ViaFerrata,
    Aktivitet.Isbre,
  ].some((it) => aktiviteter.includes(it));
}

export function skalBæreTungSekk(aktiviteter: Aktivitet[]) {
  return [
    Aktivitet.Fottur,
    Aktivitet.Tinderangling,
    Aktivitet.Randonée,
    Aktivitet.Fjellski,
    Aktivitet.Sportsklatring,
    Aktivitet.Tradklatring,
    Aktivitet.ViaFerrata,
  ].some((it) => aktiviteter.includes(it));
}
