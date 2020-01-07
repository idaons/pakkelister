import { ListMaker } from '../../models/listmaker';
import { stringsTilListeElement } from './utils';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';

const isbreTing = stringsTilListeElement(['Øks', 'Stegjern', 'Klatresele'], Kategori.TekniskUtstyr);

export const isbreRules: ListMaker[] = [
    valg => (valg.aktiviteter.includes(Aktivitet.Isbre) ? isbreTing : []),
];
