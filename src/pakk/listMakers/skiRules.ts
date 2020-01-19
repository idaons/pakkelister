import { ItemRule } from '../../models/itemRule';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';

function lagSkiRule(navn: string, aktiviteter: Aktivitet[]): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: aktiviteter.some(it => valg.aktiviteter.includes(it)),
        antall: 1,
        kategori: Kategori.Ski,
    });
}

export const skiRules: ItemRule[] = [
    lagSkiRule('Ski', [
        Aktivitet.Langrenn,
        Aktivitet.Fjellski,
        Aktivitet.Randonée,
        Aktivitet.Skøyteski,
    ]),
    lagSkiRule('Staver', [
        Aktivitet.Langrenn,
        Aktivitet.Fjellski,
        Aktivitet.Randonée,
        Aktivitet.Skøyteski,
    ]),
    lagSkiRule('Skisko', [
        Aktivitet.Langrenn,
        Aktivitet.Fjellski,
        Aktivitet.Randonée,
        Aktivitet.Skøyteski,
    ]),
    lagSkiRule('Smøring', [Aktivitet.Langrenn, Aktivitet.Fjellski]),
    lagSkiRule('Feller', [Aktivitet.Fjellski, Aktivitet.Randonée]),
    lagSkiRule('Skarejern', [Aktivitet.Randonée]),
    lagSkiRule('Skibriller', [Aktivitet.Randonée]),
    lagSkiRule('Hjelm', [Aktivitet.Randonée]),
];
