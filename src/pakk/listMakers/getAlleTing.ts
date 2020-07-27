import { ItemsGetter } from '../../models/itemsGetter';
import { getToalettSaker } from './getToalettSaker';
import { Valg } from '../../models/valg';
import { Item } from '../../models/liste';
import { getIsbreTing } from './getIsbreTing';
import { getKlær } from './getKlær';
import { getDivTing } from './getDivTing';
import { getOvernattingTing } from './getOvernattingTing';
import { getSkredTing } from './getSkredTing';
import { getSkiTing } from './getSkiTing';
import { getKlatreutstyr } from './getKlatreutstyr';
import { getFjellturTing } from './getFjellturTing';
import { getSpesielleTing } from './getSpesielleTing';

export const alleLister: ItemsGetter[] = [
    getToalettSaker,
    getIsbreTing,
    getKlær,
    getDivTing,
    getOvernattingTing,
    getSkredTing,
    getSkiTing,
    getKlatreutstyr,
    getFjellturTing,
    getSpesielleTing,
];

const sortAlphabetically = (item1: Item, item2: Item) => (item1.navn > item2.navn ? 1 : -1);

function removeDuplicates(items: Item[]) {
    let uniqueItems: Item[] = [];
    items.forEach(candidate => {
        let duplicate = uniqueItems.find(
            it => it.navn === candidate.navn && it.kategori === candidate.kategori
        );
        if (!duplicate) {
            uniqueItems.push(candidate);
        } else {
            duplicate.antall =
                duplicate.antall > candidate.antall ? duplicate.antall : candidate.antall;
        }
    });
    return uniqueItems;
}

export function getAlleTing(valg: Valg): Item[] {
    return removeDuplicates(alleLister.flatMap(rule => rule(valg)).sort(sortAlphabetically));
}
