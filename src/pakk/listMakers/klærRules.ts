import {ItemRule} from '../../models/itemRule';
import {overnatting} from './utils';
import {Kategori} from '../../models/kategori';
import {Valg} from "../../models/valg";
import {Sesong} from "../../models/sesong";

function lagVinterRules(navn: string, antall?: number): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: valg.sesong === Sesong.Vinter,
        antall: antall || 1,
        kategori: Kategori.Klær,
    });
}

export const klærRules: ItemRule[] = [
    lagVinterRules('Vindjakke'),
    lagVinterRules('Vindbukse'),
    lagVinterRules('Ulltrøye', 2),
    lagVinterRules('Ullbukse'),
    lagVinterRules('Fleece'),
    lagVinterRules('Ullsokker', 3),
    lagVinterRules('Dunjakke'),
    lagVinterRules('Lue', 2),
    lagVinterRules('Hansker'),
    lagVinterRules('Votter'),
    lagVinterRules('Hals', 2),
    valg => ({
            skalPakkes: overnatting(valg),
            navn: 'truse',
            antall: Math.ceil(valg.lengde / 1.5),
            kategori: Kategori.Klær,
        }),
];
