import { overnatting, stringArrayToItems } from "./utils";
import { Item, IValg, Kategori, Kjonn, Sesong } from "../../utils/types";
import { skalGåPåTur } from "../../hjelpefunksjoner/aktivitet";
import { erLangtur } from "../../opprettListe/LengdeValg";

export function getToalettSaker(valg: IValg): Item[] {
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
    "Deo",
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

  if (valg.idaBehov) {
    if (valg.sesong === Sesong.Sommer) {
      toalettSaker.push("Sovekit");
    } else {
      toalettSaker.push("Kuldekrem");
    }
  }

  return stringArrayToItems(toalettSaker, Kategori.Toalettsaker);
}
