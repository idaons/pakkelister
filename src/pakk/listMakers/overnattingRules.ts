import { ItemRule } from '../../models/itemRule';
import { Kategori } from '../../models/kategori';
import { Valg } from '../../models/valg';
import { Overnatting } from '../../models/overnatting';
import { sikkerhetVinter } from './utils';

function lagVintersikkerhetRule(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: sikkerhetVinter(valg),
        antall: 1,
        kategori: Kategori.Overnatting,
    });
}

function lagVintersikkerhetOrTeltRule(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: sikkerhetVinter(valg) || valg.overnatting.includes(Overnatting.Telt),
        antall: 1,
        kategori: Kategori.Overnatting,
    });
}

function lagTeltRule(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: valg.overnatting.includes(Overnatting.Telt),
        antall: 1,
        kategori: Kategori.Overnatting,
    });
}

function lagDNTRule(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: valg.overnatting.includes(Overnatting.DNThytte),
        antall: 1,
        kategori: Kategori.Overnatting,
    });
}

function lagDNTOrTeltRule(navn: string): ItemRule {
    return (valg: Valg) => ({
        navn: navn,
        skalPakkes: [Overnatting.DNThytte, Overnatting.Telt].some(it =>
            valg.overnatting.includes(it)
        ),
        antall: 1,
        kategori: Kategori.Overnatting,
    });
}

export const overnattingRules: ItemRule[] = [
    lagVintersikkerhetRule('Vindsekk'),
    lagVintersikkerhetOrTeltRule('Liggeunderlag'),
    lagVintersikkerhetOrTeltRule('Sovepose'),
    lagTeltRule('Telt'),
    lagTeltRule('Primus'),
    lagTeltRule('Kokesaker'),
    lagDNTRule('Lakenpose'),
    lagDNTOrTeltRule('Tøfler/Innesko'),
];
