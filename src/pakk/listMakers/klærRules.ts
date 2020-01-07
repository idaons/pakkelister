import { ListMaker } from '../../models/listmaker';
import { stringsTilListeElement } from './utils';
import { Kjønn } from '../../models/kjønn';
import { Kategori } from '../../models/kategori';

export const klærRules: ListMaker[] = [
    valg => [
        {
            navn: 'truser',
            antall: valg.lengde,
            kategori: Kategori.Klær,
        },
    ],
];
