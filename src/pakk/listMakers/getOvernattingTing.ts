import { Kategori } from "../../models/kategori";
import { Valg } from "../../models/valg";
import { Overnatting, overnattingUte } from "../../models/overnatting";
import { sikkerhetVinter, stringArrayToItems } from "./utils";
import { Item } from "../../models/liste";

export function getOvernattingTing(valg: Valg): Item[] {
  let overnattingTing: string[] = [];

  if (sikkerhetVinter(valg)) {
    overnattingTing.push("Vindsekk");
  }

  if (sikkerhetVinter(valg) || overnattingUte(valg)) {
    overnattingTing.push("Liggeunderlag", "Sovepose");
  }

  if (overnattingUte(valg)) {
    overnattingTing.push("Primus", "Kokesaker", "Søppelpose");
  }

  if (valg.overnatting.includes(Overnatting.Telt)) {
    overnattingTing.push("Telt");
  }

  if (valg.overnatting.includes(Overnatting.Hengekøye)) {
    overnattingTing.push(
      "Hengekøye",
      "Hengekøyeoppheng",
      "Tarp",
      "Myggnetting"
    );
  }

  if (valg.overnatting.includes(Overnatting.DNThytte)) {
    overnattingTing.push("Lakenpose", "Søppelpose");
  }

  if (
    [Overnatting.DNThytte, Overnatting.Telt].some((it) =>
      valg.overnatting.includes(it)
    )
  ) {
    overnattingTing.push("Tøfler/Innesko");
  }

  return stringArrayToItems(overnattingTing, Kategori.Overnatting);
}
