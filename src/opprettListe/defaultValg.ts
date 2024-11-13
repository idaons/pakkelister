import { IValg, Sesong, Kjonn } from "../utils/types";

const today = new Date();

const erVinter = today.getMonth() >= 10 || today.getMonth() <= 3;

export const defaultValg: IValg = {
  sesong: erVinter ? Sesong.Vinter : Sesong.Sommer,
  overnatting: [],
  kjønn: Kjonn.Irrelevant,
  lengde: 3,
  aktiviteter: [],
  idaBehov: false,
};
