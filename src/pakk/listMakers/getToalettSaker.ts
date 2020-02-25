import { overnatting, stringArrayToItems } from './utils';
import { Kategori } from '../../models/kategori';
import { Item } from '../../models/liste';
import { Valg } from '../../models/valg';
import { Kjønn } from '../../models/kjønn';

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
    }

    return stringArrayToItems(toalettSaker, Kategori.Toalettsaker);
}
