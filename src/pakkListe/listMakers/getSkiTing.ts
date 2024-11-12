import { Aktivitet } from "../../models/aktivitet";
import { Valg } from "../../models/valg";
import { Item } from "../../models/liste";
import { stringArrayToItems } from "./utils";
import { Kategori } from "../../models/kategori";

export function getSkiTing(valg: Valg): Item[] {
  let skiTing: string[] = [];

  const langrenn = valg.aktiviteter.includes(Aktivitet.Langrenn);
  const fjellski = valg.aktiviteter.includes(Aktivitet.Fjellski);
  const randone = valg.aktiviteter.includes(Aktivitet.Randonée);
  const skøyteski = valg.aktiviteter.includes(Aktivitet.Skøyteski);

  const skalPåSki = langrenn || fjellski || randone || skøyteski;

  if (skalPåSki) {
    skiTing.push("Ski", "Skistaver", "Skisko");
    if (valg.idaBehov) {
      skiTing.push("Varme såler");
    }
  }

  if (langrenn || fjellski) {
    skiTing.push("Smøring");
  }

  if (fjellski) {
    skiTing.push("Kortfeller");
    skiTing.push("Langfeller");
  }

  if (randone) {
    skiTing.push("Feller");
    skiTing.push("Skarejern", "Skibriller", "Hjelm");
  }

  return stringArrayToItems(skiTing, Kategori.Ski);
}
