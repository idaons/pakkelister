import { ItemRule } from '../../models/itemRule';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';

function lagIsbreRule(navn: string, antall?: number): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: valg.aktiviteter.includes(Aktivitet.Isbre),
        antall: antall || 1,
        kategori: Kategori.TekniskUtstyr,
    });
}

export const isbreRules: ItemRule[] = [
    lagIsbreRule('Isøks'),
    lagIsbreRule('Stegjern'),
    lagIsbreRule('Klatresele'),
    lagIsbreRule('Skrukarabin', 2),
    lagIsbreRule('Karabin', 1),
    lagIsbreRule('Prussik', 2),
    lagIsbreRule('120-slynge', 2),
    lagIsbreRule('Tau', 1),
];
