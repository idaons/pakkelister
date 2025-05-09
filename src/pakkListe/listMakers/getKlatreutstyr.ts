import { Aktivitet, Item, IValg, Kategori } from "../../utils/types";
import { overlapp, stringArrayToItems } from "./utils";

export function getKlatreutstyr(valg: IValg): Item[] {
  let items: string[] = [];

  if (
    overlapp(valg.aktiviteter, [
      Aktivitet.Sportsklatring,
      Aktivitet.Tradklatring,
      Aktivitet.ViaFerrata,
    ])
  ) {
    items.push("Klatresele", "Hjelm");
  }

  if (
    overlapp(valg.aktiviteter, [
      Aktivitet.Sportsklatring,
      Aktivitet.Tradklatring,
    ])
  ) {
    items.push("Tau", "Taubrems", "Kalkpose", "Klatresko", "Walkie-talkie");
  }

  if (overlapp(valg.aktiviteter, [Aktivitet.Sportsklatring])) {
    items.push("Kortslynger", "Sikringsbriller");
  }

  if (overlapp(valg.aktiviteter, [Aktivitet.Tradklatring])) {
    items.push(
      "Kiler, kamkiler",
      "Kortslynger",
      "Diverse slynger",
      "Bailetau",
      "Diverse karabiner",
      "Nøttepirker",
      "Prusiker",
    );
  }

  if (overlapp(valg.aktiviteter, [Aktivitet.ViaFerrata])) {
    items.push("Via ferrata kit");
  }

  return stringArrayToItems(items, Kategori.TekniskUtstyr);
}
