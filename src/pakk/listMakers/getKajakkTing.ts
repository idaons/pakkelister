import { Kategori } from '../../models/kategori';
import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';
import { Item } from '../../models/liste';
import { stringArrayToItems } from './utils';

export function getKajakkTing(valg: Valg): Item[] {
    if (!valg.aktiviteter.includes(Aktivitet.Kajakk)) {
        return [];
    }

    const kajakkTing = [
        'Våtdrakt',
        'Våtsko',
        'Tørt skift',
        'Pakkposer',
        'Padleåre',
        'Kajakk',
        'Redningsvest',
        'Spruttrekk',
    ];

    return stringArrayToItems(kajakkTing, Kategori.TekniskUtstyr);
}
