import { ListMaker } from '../../models/listmaker';
import { stringsTilListeElement } from './utils';
import { Kjønn } from '../../models/kjønn';
import { Kategori } from '../../models/kategori';
import { Overnatting } from '../../models/overnatting';
import { Valg } from '../../models/valg';

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

function overnatting(valg: Valg) {
    return valg.overnatting !== Overnatting.IkkeOvernatting;
}

export const toalettSakerRules: ListMaker[] = [
    valg => (overnatting(valg) ? fellestoalettSaker : []),
    valg =>
        overnatting(valg) && [Kjønn.Kvinne, Kjønn.Begge].includes(valg.kjønn) ? jenteTing : [],
];
