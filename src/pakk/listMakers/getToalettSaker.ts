import { overnatting, stringArrayToItems } from './utils';
import { Kategori } from '../../models/kategori';
import { Item } from '../../models/liste';
import { Valg } from '../../models/valg';
import { Kjønn } from '../../models/kjønn';
import { Sesong } from '../../models/sesong';
import { Overnatting } from '../../models/overnatting';
import { skalGåPåTur } from '~models/aktivitet';
import { erLangtur } from '~nyListe/valg/LengdeValg';

export function getToalettSaker(valg: Valg): Item[] {
    let toalettSaker = ['Solkrem'];

    if (skalGåPåTur(valg.aktiviteter)) {
        toalettSaker.push('Sportsteip');
    }

    if (!overnatting(valg)) {
        return stringArrayToItems(toalettSaker, Kategori.Toalettsaker);
    }

    toalettSaker.push(
        'Tannbørste',
        'Tannkrem',
        'Tanntråd',
        'Linsevæske',
        'Linsebeholder',
        'Briller',
        'Piller',
        'Deo'
    );

    if (valg.kjønn === Kjønn.Kvinne) {
        toalettSaker.push('Hårstrikk');
        toalettSaker.push('Diverse jenteting');
    }

    if (valg.kjønn === Kjønn.Mann && erLangtur(valg)) {
        toalettSaker.push('Barberhøvel');
    }

    if (valg.sesong === Sesong.FjellSommer) toalettSaker.push('Myggmiddel');

    if (valg.spesielleBehov) {
        if (valg.sesong === Sesong.Vinter) toalettSaker.push('Kuldekrem');

        if (
            valg.overnatting.includes(Overnatting.Telt) ||
            valg.overnatting.includes(Overnatting.DNThytte)
        )
            toalettSaker.push('Sovekit');
    }

    return stringArrayToItems(toalettSaker, Kategori.Toalettsaker);
}
