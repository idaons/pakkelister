import { getEnumAsArray } from "../utils/enum";

export enum Kjonn {
  Mann,
  Kvinne,
  Irrelevant,
}

export function getKjønnLabel(k: Kjonn) {
  let label = "";
  switch (k) {
    case Kjonn.Irrelevant:
      label = "Annet / irrelevant";
      break;
    default:
      label = Kjonn[k];
  }
  return label;
}

export function getKjønnArray(): Kjonn[] {
  return getEnumAsArray(Kjonn);
}
