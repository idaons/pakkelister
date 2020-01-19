import { ItemRule } from '../../models/itemRule';
import { overnatting } from './utils';
import { Kjønn } from '../../models/kjønn';
import { Kategori } from '../../models/kategori';
import { Valg } from '../../models/valg';

function lagToalettRule(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: overnatting(valg),
        antall: 1,
        kategori: Kategori.Toalettsaker,
    });
}

export const toalettSakerRules: ItemRule[] = [
    lagToalettRule('Tannbørste'),
    lagToalettRule('Tannkrem'),
    lagToalettRule('Linsevæske'),
    lagToalettRule('Linsebeholder'),
    lagToalettRule('Briller'),
    lagToalettRule('Tanntråd'),
    lagToalettRule('Piller'),
    lagToalettRule('Deo'),
    valg => ({
        navn: 'Hårstrikk',
        skalPakkes: overnatting(valg) && [Kjønn.Kvinne, Kjønn.Begge].includes(valg.kjønn),
        kategori: Kategori.Toalettsaker,
        antall: 1,
    }),
];
