import { ItemsGetter } from '../../models/itemsGetter';
import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';
import { Item } from '../../models/liste';
import { stringArrayToItems } from './utils';

export function getSkredTing(valg: Valg): Item[] {
    if (![Aktivitet.Randonée, Aktivitet.Fjellski].some(it => valg.aktiviteter.includes(it))) {
        return [];
    }

    const skredTing = ['Skredsøker', 'Søkestang', 'Spade'];

    return stringArrayToItems(skredTing, Kategori.TekniskUtstyr);
}
