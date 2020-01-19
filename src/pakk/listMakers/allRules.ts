import { ItemRule } from '../../models/itemRule';
import { toalettSakerRules } from './toalettSaker';
import { Valg } from '../../models/valg';
import { Item } from '../../models/liste';
import { isbreRules } from './isbre';
import { klærRules } from './klærRules';
import { divRules } from './div';

export const allRules: ItemRule[] = [
    ...toalettSakerRules,
    ...isbreRules,
    ...klærRules,
    ...divRules,
];

export function pakkAlleLister(valg: Valg): Item[] {
    return allRules.flatMap(rule => rule(valg)).filter(ting => ting.skalPakkes);
}
