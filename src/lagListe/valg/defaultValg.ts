import { Valg } from "../../models/valg";
import { Sesong } from "../../models/sesong";
import { Kjonn } from "../../models/kjonn";

const today = new Date();

const erVinter = today.getMonth() >= 10 || today.getMonth() <= 3;

export const defaultValg: Valg = {
  sesong: erVinter ? Sesong.Vinter : Sesong.Sommer,
  overnatting: [],
  kjønn: Kjonn.Irrelevant,
  lengde: 3,
  aktiviteter: [],
  idaBehov: false,
};
