import { objektMedAntallTilItems, overnatting, TingMedAntall } from './utils';
import { Kategori } from '../../models/kategori';
import { Valg } from '../../models/valg';
import { Sesong } from '../../models/sesong';
import { Item } from '../../models/liste';
import { Overnatting } from '../../models/overnatting';
import { Kjønn } from '../../models/kjønn';
import { Aktivitet, skalGåPåTur } from '../../models/aktivitet';

export function getKlær(valg: Valg): Item[] {
    let klær: TingMedAntall = {};

    const skalVæreInneBlantFolk =
        valg.overnatting.includes(Overnatting.HusHotell) ||
        valg.overnatting.includes(Overnatting.FamilieHytte);

    if (valg.sesong === Sesong.Vinter) {
        klær = {
            ...klær,
            Vindjakke: 1,
            Vindbukse: 1,
            Ulltrøye: 2,
            Stilong: 1,
            Fleece: 1,
            Ullsokker: 3,
            Dunjakke: 1,
            Lue: 2,
            Hansker: 1,
            Votter: 1,
            Vindvotter: 1,
            Hals: 2,
            Brynje: 1,
        };

        if (valg.kjønn !== Kjønn.Mann) {
            klær = {
                ...klær,
                Dunskjørt: 1,
                ['Ull-BH']: 1,
            };
        }
    }

    if (valg.sesong !== Sesong.Vinter) {
        klær = {
            ...klær,
            Shorts: 1,
            Bukse: 1,
            Tskjorte: 2,
            Badetøy: 1,
            Caps: 1,
        };

        if (valg.kjønn !== Kjønn.Mann) {
            klær = {
                ...klær,
                sportsBH: 1,
                singlet: 1,
            };
        }
        if (valg.sesong === Sesong.FjellSommer) {
            klær = {
                ...klær,
                Fleece: 1,
                Ulltrøye: 1,
                Vindjakke: 1,
                Vindbukse: 1,
                Ullsokker: 3,
                Dunjakke: 1,
                Lue: 2,
                Hansker: 1,
                Hals: 2,
                Stilongs: 1,
            };
        }
    }

    if (valg.aktiviteter.includes(Aktivitet.Bytur)) {
        klær = {
            ...klær,
            ['By-outfit']: 1,
        };
    }

    if (valg.aktiviteter.includes(Aktivitet.Jogging)) {
        klær = {
            ...klær,
            Treningstøy: 1,
            Joggesko: 1,
        };
    }

    if (overnatting(valg)) {
        klær = {
            ...klær,
            Truser: Math.ceil(valg.lengde / 1.5),
        };
    }

    if (valg.spesielleBehov) {
        if (skalVæreInneBlantFolk) {
            klær = {
                ...klær,
                Innesokker: Math.ceil(valg.lengde / 3),
                Innebukse: 1,
                ['Inne-T-skjorter']: Math.ceil(valg.lengde / 3),
            };

            if (valg.kjønn !== Kjønn.Mann) {
                klær = {
                    ...klær,
                    ['Inne-BH']: 1,
                };
            }
        }

        if (skalGåPåTur(valg.aktiviteter)) {
            klær = {
                ...klær,
                Gnagsårsokk: 1,
            };

            if (valg.sesong === Sesong.Vinter) {
                klær = {
                    ...klær,
                    Pulsvarmer: 1,
                    Dampsperresokk: 1,
                };
            }
        }
    }

    return objektMedAntallTilItems(klær, Kategori.Klær);
}
