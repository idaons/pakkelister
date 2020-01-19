import { ItemRule } from '../../models/itemRule';
import { toalettSakerRules } from './toalettSaker';
import { Valg } from '../../models/valg';
import { Item } from '../../models/liste';
import { isbreRules } from './isbre';
import { klærRules } from './klærRules';
import { divRules } from './div';
import { overnattingRules } from './overnattingRules';
import { skredRules } from './skedRules';
import { skiRules } from './skiRules';

export const allRules: ItemRule[] = [
    ...toalettSakerRules,
    ...isbreRules,
    ...klærRules,
    ...divRules,
    ...overnattingRules,
    ...skredRules,
    ...skiRules,
];

export function pakkAlleLister(valg: Valg): Item[] {
    return allRules.flatMap(rule => rule(valg)).filter(ting => ting.skalPakkes);
}
