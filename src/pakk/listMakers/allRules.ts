import { ListMaker } from '../../models/listmaker';
import { toalettSakerRules } from './toalettSaker';
import { Valg } from '../../models/valg';
import { ListeElement } from '../../models/liste';
import { isbreRules } from './isbre';
import { klærRules } from './klærRules';
import { divRules } from './div';

export const allRules: ListMaker[] = [
    ...toalettSakerRules,
    ...isbreRules,
    ...klærRules,
    ...divRules,
];

export function pakkAlleLister(valg: Valg): ListeElement[] {
    return allRules.flatMap(rule => rule(valg));
}
