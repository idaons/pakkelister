import { ItemRule } from '../../models/itemRule';
import { overnatting } from './utils';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';
import { Sesong } from '../../models/sesong';

function lagDivRule(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: true,
        antall: 1,
        kategori: Kategori.Div,
    });
}

export const divRules: ItemRule[] = [
    lagDivRule('Flaske'),
    lagDivRule('Sekk'),
    lagDivRule('Solbriller'),
    lagDivRule('Solkrem'),
    lagDivRule('Førstehjelp'),
    lagDivRule('Kart'),
    lagDivRule('Mat'),
    valg => ({
        navn: 'Lykt',
        skalPakkes: overnatting(valg) || Sesong.Vinter === valg.sesong,
        antall: 1,
        kategori: Kategori.Div,
    }),
    valg => ({
        navn: 'Lader',
        skalPakkes: overnatting(valg),
        antall: 1,
        kategori: Kategori.Div,
    }),
    valg => ({
        navn: 'Bok',
        skalPakkes: overnatting(valg),
        antall: 1,
        kategori: Kategori.Div,
    }),
    valg => ({
        navn: 'Kamera',
        skalPakkes: valg.aktiviteter.includes(Aktivitet.Fotografi),
        antall: 1,
        kategori: Kategori.Div,
    }),
];
