import { overnatting, stringArrayToItems } from "./utils";
import { Kategori } from "../../models/kategori";
import { Aktivitet, skalGåPåTur } from "../../models/aktivitet";
import { Valg } from "../../models/valg";
import { Item } from "../../models/liste";
import { Kjonn } from "../../models/kjonn";
import { Overnatting, overnattingBareHus } from "../../models/overnatting";
import { erLangtur } from "../../lagListe/valg/LengdeValg";

export function getDivTing(valg: Valg): Item[] {
  let ting = [
    "Solbriller",
    "Lommebok",
    "Antibac",
    "Mat",
    "Fyrstikker",
    "Dopapir",
    "Flaske",
    "Førstehjelp",
    "Hodelykt",
  ];

  if (skalGåPåTur(valg.aktiviteter)) {
    ting.push("Sekk", "Kart");
  }

  if (overnatting(valg)) {
    ting.push("Ladekabler", "Bok", "Håndkle");

    if (!overnattingBareHus(valg)) {
      ting.push("Powerbank");
    }

    if (valg.overnatting.includes(Overnatting.FamilieHytte)) {
      ting.push("Hyttenøkkel");
    }

    if (valg.overnatting.includes(Overnatting.DNThytte)) {
      ting.push("DNT-nøkkel");
    }
  }

  if (valg.aktiviteter.includes(Aktivitet.Bytur)) {
    ting.push("Paraply");

    if (valg.kjønn !== Kjonn.Mann) ting.push("Håndveske");
  }

  if (
    valg.aktiviteter.includes(Aktivitet.Skøyteski) ||
    valg.aktiviteter.includes(Aktivitet.Langrenn) ||
    valg.aktiviteter.includes(Aktivitet.Jogging) ||
    valg.aktiviteter.includes(Aktivitet.Sykkel)
  ) {
    ting.push("Treningssekk");
  }

  if (erLangtur(valg)) {
    ting.push("Biotex");
  }

  if (valg.aktiviteter.includes(Aktivitet.Bortekontor)) {
    ting.push("PC og ladekabel");
    ting.push("Mus og usb-dings");
    ting.push("Hodetelefoner");
  }
  return stringArrayToItems(ting, Kategori.Div);
}
