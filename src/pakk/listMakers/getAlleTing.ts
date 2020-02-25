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

export const alleLister: ItemsGetter[] = [
    getToalettSaker,
    getIsbreTing,
    getKlær,
    getDivTing,
    getOvernattingTing,
    getSkredTing,
    getSkiTing,
];

const sortAlphabetically = (item1: Item, item2: Item) => (item1.navn > item2.navn ? 1 : -1);

export function getAlleTing(valg: Valg): Item[] {
    return alleLister.flatMap(rule => rule(valg)).sort(sortAlphabetically);
}
