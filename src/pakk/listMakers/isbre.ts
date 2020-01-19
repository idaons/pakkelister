import { ItemRule } from '../../models/itemRule';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';

function lagIsbreRule(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: valg.aktiviteter.includes(Aktivitet.Isbre),
        antall: 1,
        kategori: Kategori.TekniskUtstyr,
    });
}

export const isbreRules: ItemRule[] = [
    lagIsbreRule('Isøks'),
    lagIsbreRule('Stegjern'),
    lagIsbreRule('Klatresele'),
];
