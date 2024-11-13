import { IValg, Item, Overnatting, Kategori } from "../../utils/types";
import {
  overnatteUkjentSted,
  overnattingUte,
} from "../../hjelpefunksjoner/overnatting";
import { sikkerhetVinter, stringArrayToItems } from "./utils";

export function getOvernattingTing(valg: IValg): Item[] {
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
    overnattingTing.push("Telt", "Våtservietter");
  }

  if (valg.overnatting.includes(Overnatting.Hengekøye)) {
    overnattingTing.push(
      "Hengekøye",
      "Hengekøyeoppheng",
      "Tarp",
      "Myggnetting",
      "Våtservietter",
    );
  }

  if (valg.overnatting.includes(Overnatting.DNThytte)) {
    overnattingTing.push("Lakenpose", "Søppelpose");
  }

  if (overnatteUkjentSted(valg.overnatting)) {
    overnattingTing.push("Tøfler/Innesko");
  }

  return stringArrayToItems(overnattingTing, Kategori.Overnatting);
}
