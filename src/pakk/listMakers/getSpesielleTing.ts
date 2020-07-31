import { Kategori } from '../../models/kategori';
import { Aktivitet, skalGåPåTur } from '../../models/aktivitet';
import { Valg } from '../../models/valg';
import { Item } from '../../models/liste';
import { stringArrayToItems, TingMedAntall } from './utils';
import { Sesong } from '~models/sesong';

export function getSpesielleTing(valg: Valg): Item[] {
    let ting: string[] = [];

    if (skalGåPåTur(valg.aktiviteter)) {
        ting.push('Treningsklokke');
        if (valg.spesielleBehov) {
            ting.push('Hoftegnagsårbeskytter');
        }
        if (valg.sesong === Sesong.Vinter) {
            ting.push('Termos');
            ting.push('Varmeposer');
        } else if (valg.sesong === Sesong.FjellSommer) {
            ting.push('Sitteunderlag');
        }
    }

    if (valg.aktiviteter.includes(Aktivitet.Jogging)) {
        ting.push('Løpebelte');
    }

    return stringArrayToItems(ting, Kategori.Div);
}
