import { ListMaker } from '../../models/listmaker';
import { overnatting, stringsTilListeElement } from './utils';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';

const divTing = stringsTilListeElement(['Flaske', 'Sekk'], Kategori.Div);

export const divRules: ListMaker[] = [
    valg => divTing,
    valg => (overnatting(valg) ? stringsTilListeElement(['Bok'], Kategori.Div) : []),
    valg =>
        valg.aktiviteter.includes(Aktivitet.Fotografi)
            ? stringsTilListeElement(['Kamera'], Kategori.Div)
            : [],
];
