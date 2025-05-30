import { getEnumAsArray } from "../utils/enum";
import { Overnatting, IValg } from "../utils/types";

export function getOvernattingLabel(o: Overnatting) {
  let label = "";
  switch (o) {
    case Overnatting.DNThytte:
      label = "DNT-hytte";
      break;
    case Overnatting.FamilieHytte:
      label = "Familie-hytte";
      break;
    case Overnatting.HusHotell:
      label = "Hus eller hotell";
      break;
    default:
      label = Overnatting[o];
  }
  return label;
}

export function getOvernattingArray(): Overnatting[] {
  return getEnumAsArray(Overnatting);
}

export function overnattingUte(valg: IValg): boolean {
  return [Overnatting.Hengekøye, Overnatting.Telt].some((o) =>
    valg.overnatting.includes(o),
  );
}

export function overnatteUkjentSted(overnatting: Overnatting[]) {
  return [Overnatting.Hengekøye, Overnatting.Telt, Overnatting.DNThytte].some(
    (o) => overnatting.includes(o),
  );
}
export function overnattingBareHus(valg: IValg): boolean {
  return (
    valg.overnatting.length === 1 &&
    valg.overnatting.includes(Overnatting.HusHotell)
  );
}
