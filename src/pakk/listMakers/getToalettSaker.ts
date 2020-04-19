import { overnatting, stringArrayToItems } from './utils';
import { Kategori } from '../../models/kategori';
import { Item } from '../../models/liste';
import { Valg } from '../../models/valg';
import { Kjønn } from '../../models/kjønn';
import { Sesong } from '../../models/sesong';
import { Overnatting } from '../../models/overnatting';

export function getToalettSaker(valg: Valg): Item[] {
    if (!overnatting(valg)) {
        return [];
    }

    let toalettSaker = [
        'Tannbørste',
        'Tannkrem',
        'Tanntråd',
        'Linsevæske',
        'Linsebeholder',
        'Briller',
        'Piller',
        'Deo',
    ];

    if (valg.kjønn === Kjønn.Kvinne) {
        toalettSaker.push('Hårstrikk');
        toalettSaker.push('Andre jenteting');
    }

    if (valg.sesong === Sesong.Vinter) toalettSaker.push('Kuldekrem');

    if (valg.sesong === Sesong.Sommer) toalettSaker.push('Myggmiddel');

    if (
        valg.overnatting.includes(Overnatting.Telt) ||
        valg.overnatting.includes(Overnatting.DNThytte)
    )
        toalettSaker.push('sovekit');

    return stringArrayToItems(toalettSaker, Kategori.Toalettsaker);
}
