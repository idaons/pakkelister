import { ListMaker } from '../../models/listmaker';
import { stringsTilListeElement } from './utils';
import { Kjønn } from '../../models/kjønn';
import { Kategori } from '../../models/kategori';

const fellestoalettSaker = stringsTilListeElement(
    [
        'Tannbørste',
        'Tannkrem',
        'Linsevæske',
        'Linsebeholder',
        'Briller',
        'Tanntråd',
        'Piller',
        'Deo',
    ],
    Kategori.Toalettsaker
);

const jenteTing = stringsTilListeElement(['Hårstrikk'], Kategori.Toalettsaker);

export const toalettSakerRules: ListMaker[] = [
    valg => fellestoalettSaker,
    valg => ([Kjønn.Kvinne, Kjønn.Begge].includes(valg.kjønn) ? jenteTing : []),
];
