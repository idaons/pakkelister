import { overnatting, stringArrayToItems } from './utils';
import { Kategori } from '../../models/kategori';
import { Aktivitet, skalGåPåTur } from '../../models/aktivitet';
import { Valg } from '../../models/valg';
import { Sesong } from '../../models/sesong';
import { Item } from '../../models/liste';
import { Kjønn } from '../../models/kjønn';
import { Overnatting, overnattingBareHus } from '../../models/overnatting';
import { erLangtur } from '~lagListe/valg/LengdeValg';

export function getDivTing(valg: Valg): Item[] {
    let ting = ['Solbriller', 'Lommebok'];

    if (skalGåPåTur(valg.aktiviteter)) {
        ting.push(
            'Flaske',
            'Sekk',
            'Førstehjelp',
            'Kart',
            'Mat',
            'Antibac',
            'Fyrstikker',
            'Dopapir',
            'Håndkle'
        );
    }

    if (overnatting(valg)) {
        ting.push('Ladekabler', 'Bok');

        if (!overnattingBareHus(valg)) {
            ting.push('Hodelykt', 'Powerbank');
        }

        if (valg.overnatting.includes(Overnatting.FamilieHytte)) {
            ting.push('Hyttenøkkel');
        }

        if (valg.overnatting.includes(Overnatting.DNThytte)) {
            ting.push('DNT-nøkkel');
        }
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

    if (erLangtur(valg)) {
        ting.push('Biotex');
    }

    return stringArrayToItems(ting, Kategori.Div);
}
