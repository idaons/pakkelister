import { overnatting, stringArrayToItems } from './utils';
import { Kategori } from '../../models/kategori';
import { Aktivitet, skalGåPåTur } from '../../models/aktivitet';
import { Valg } from '../../models/valg';
import { Sesong } from '../../models/sesong';
import { Item } from '../../models/liste';
import { Kjønn } from '../../models/kjønn';
import { Overnatting } from '../../models/overnatting';

export function getDivTing(valg: Valg): Item[] {
    let ting = ['Solbriller', 'Solkrem', 'Lommebok'];

    if (skalGåPåTur(valg.aktiviteter)) {
        ting.push(
            'Flaske',
            'Sekk',
            'Førstehjelp',
            'Kart',
            'Mat',
            'Sportsteip',
            'Antibac',
            'Fyrstikker',
            'Dopapir',
            'Håndkle'
        );
    }

    if (overnatting(valg) || Sesong.Vinter === valg.sesong) {
        ting.push('Hodelykt');
    }

    if (overnatting(valg)) {
        ting.push('Ladekabler', 'Bok', 'Powerbank');
    }

    if (valg.overnatting.includes(Overnatting.FamilieHytte)) {
        ting.push('Hyttenøkkel');
    }

    if (valg.overnatting.includes(Overnatting.DNThytte)) {
        ting.push('DNT-nøkkel');
    }

    if (valg.aktiviteter.includes(Aktivitet.Fotografi)) {
        ting.push('Kamera');
    }

    if (valg.aktiviteter.includes(Aktivitet.Bytur)) {
        ting.push('Paraply');

        if (valg.kjønn !== Kjønn.Mann) ting.push('Håndveske');
    }

    if (
        valg.aktiviteter.includes(Aktivitet.Skøyteski) ||
        valg.aktiviteter.includes(Aktivitet.Langrenn)
    ) {
        ting.push('Treningssekk');
    }

    return stringArrayToItems(ting, Kategori.Div);
}
