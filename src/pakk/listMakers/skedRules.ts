import { ItemRule } from '../../models/itemRule';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';

function lagSkredRules(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: [Aktivitet.Randonée, Aktivitet.Fjellski].some(it =>
            valg.aktiviteter.includes(it)
        ),
        antall: 1,
        kategori: Kategori.TekniskUtstyr,
    });
}

export const skredRules: ItemRule[] = [
    lagSkredRules('Skredsøker'),
    lagSkredRules('Søkestang'),
    lagSkredRules('Spade'),
];
