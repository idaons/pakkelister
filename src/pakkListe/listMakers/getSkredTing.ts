import { Aktivitet, Item, IValg, Kategori } from "../../utils/types";
import { stringArrayToItems } from "./utils";

export function getSkredTing(valg: IValg): Item[] {
  if (
    ![Aktivitet.Randonée, Aktivitet.Fjellski].some((it) =>
      valg.aktiviteter.includes(it),
    )
  ) {
    return [];
  }

  const skredTing = ["Skredsøker", "Søkestang", "Spade"];

  return stringArrayToItems(skredTing, Kategori.TekniskUtstyr);
}
