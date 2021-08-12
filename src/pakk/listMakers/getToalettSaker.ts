import { overnatting, stringArrayToItems } from "./utils";
import { Kategori } from "../../models/kategori";
import { Item } from "../../models/liste";
import { Valg } from "../../models/valg";
import { Kjonn } from "../../models/kjonn";
import { Sesong } from "../../models/sesong";
import { skalGåPåTur } from "../../models/aktivitet";
import { erLangtur } from "../../lagListe/valg/LengdeValg";

export function getToalettSaker(valg: Valg): Item[] {
  let toalettSaker = ["Solkrem"];

  if (skalGåPåTur(valg.aktiviteter)) {
    toalettSaker.push("Sportsteip");
  }

  if (!overnatting(valg)) {
    return stringArrayToItems(toalettSaker, Kategori.Toalettsaker);
  }

  toalettSaker.push(
    "Tannbørste",
    "Tannkrem",
    "Tanntråd",
    "Linsevæske",
    "Linsebeholder",
    "Briller",
    "Piller",
    "Deo"
  );

  if (valg.kjønn === Kjonn.Kvinne) {
    toalettSaker.push("Diverse jenteting");
  }

  if (valg.kjønn !== Kjonn.Mann) {
    toalettSaker.push("Hårstrikk");
  }

  if (valg.kjønn !== Kjonn.Kvinne && erLangtur(valg)) {
    toalettSaker.push("Barberhøvel");
  }

  if (valg.sesong === Sesong.Sommer) {
    toalettSaker.push("Myggmiddel");
  }

  if (valg.spesielleBehov) {
    if (valg.sesong === Sesong.Sommer) {
      toalettSaker.push("Sovekit");
    } else {
      toalettSaker.push("Kuldekrem");
    }
  }

  return stringArrayToItems(toalettSaker, Kategori.Toalettsaker);
}
