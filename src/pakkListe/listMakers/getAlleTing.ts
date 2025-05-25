import { getToalettSaker } from "./getToalettSaker";
import { IValg, Item, ItemsGetter } from "../../utils/types";
import { getIsbreTing } from "./getIsbreTing";
import { getKlaer } from "./getKlaer";
import { getDivTing } from "./getDivTing";
import { getOvernattingTing } from "./getOvernattingTing";
import { getSkredTing } from "./getSkredTing";
import { getSkiTing } from "./getSkiTing";
import { getKlatreutstyr } from "./getKlatreutstyr";
import { getFjellturTing } from "./getFjellturTing";
import { getSpesielleTing } from "./getSpesielleTing";
import { getKajakkTing } from "./getKajakkTing";
import { getSykkelTing } from "./getSykkelTing";
import { getMatkasse } from "./getMatkasse";

export const alleLister: ItemsGetter[] = [
  getToalettSaker,
  getIsbreTing,
  getKlaer,
  getDivTing,
  getOvernattingTing,
  getSkredTing,
  getSkiTing,
  getKlatreutstyr,
  getFjellturTing,
  getSpesielleTing,
  getKajakkTing,
  getSykkelTing,
  getMatkasse,
] as ItemsGetter[];

const sortAlphabetically = (item1: Item, item2: Item) =>
  item1.navn > item2.navn ? 1 : -1;

function removeDuplicates(items: Item[]) {
  let uniqueItems: Item[] = [];
  items.forEach((candidate) => {
    let duplicate = uniqueItems.find(
      (it) => it.navn === candidate.navn && it.kategori === candidate.kategori,
    );
    if (!duplicate) {
      uniqueItems.push(candidate);
    } else {
      duplicate.antall =
        duplicate.antall > candidate.antall
          ? duplicate.antall
          : candidate.antall;
    }
  });
  return uniqueItems;
}

export function getAlleTing(valg: IValg): Item[] {
  return removeDuplicates(
    alleLister.flatMap((rule) => rule(valg)).sort(sortAlphabetically),
  );
}
