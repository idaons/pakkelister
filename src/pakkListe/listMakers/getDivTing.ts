import { overnatting, stringArrayToItems } from "./utils";
import { Kategori } from "../../models/kategori";
import { Aktivitet, skalGåPåTur } from "../../models/aktivitet";
import { Valg } from "../../models/valg";
import { Item } from "../../models/liste";
import { Kjonn } from "../../models/kjonn";
import {
  overnatteUkjentSted,
  Overnatting,
  overnattingBareHus,
} from "../../models/overnatting";
import { erLangtur } from "../../opprettListe/LengdeValg";
import { Sesong } from "../../models/sesong";

export function getDivTing(valg: Valg): Item[] {
  let ting = [
    "Solbriller",
    "Lommebok",
    "Antibac",
    "Mat",
    "Flaske",
    "Førstehjelp",
    "Hodelykt",
    "Hodetelefoner",
  ];
  if (overnatteUkjentSted(valg.overnatting)) {
    ting.push("Termos", "Dopapir", "Fyrstikker");
  }

  if (skalGåPåTur(valg.aktiviteter)) {
    ting.push("Sekk", "Kart");

    if (valg.sesong === Sesong.Sommer) {
      ting.push("Sitteunderlag");
    }
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

    if (valg.overnatting.includes(Overnatting.HusHotell)) {
      ting.push("Brødristerpose");
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
  }
  return stringArrayToItems(ting, Kategori.Div);
}
