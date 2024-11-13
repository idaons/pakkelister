import { getEnumAsArray } from "../utils/enum";
import { Kjonn } from "../utils/types";

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
