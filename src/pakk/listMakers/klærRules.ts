import {ItemRule} from '../../models/itemRule';
import {overnatting} from './utils';
import {Kategori} from '../../models/kategori';

export const klærRules: ItemRule[] = [
    valg => ({
            skalPakkes: overnatting(valg),
            navn: 'truse',
            antall: valg.lengde,
            kategori: Kategori.Klær,
        }),
];
