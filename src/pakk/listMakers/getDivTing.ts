import { overnatting, stringArrayToItems } from './utils';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';
import { Sesong } from '../../models/sesong';
import { Item } from '../../models/liste';

export function getDivTing(valg: Valg): Item[] {
    let ting = ['Flaske', 'Sekk', 'Solbriller', 'Solkrem', 'Førstehjelp', 'Kart', 'Mat'];

    if (overnatting(valg) || Sesong.Vinter === valg.sesong) {
        ting.push('Hodelykt');
    }

    if (overnatting(valg)) {
        ting.push('Lader', 'Bok');
    }

    if (valg.aktiviteter.includes(Aktivitet.Fotografi)) {
        ting.push('Kamera');
    }

    return stringArrayToItems(ting, Kategori.Div);
}
