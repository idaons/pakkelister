import { Aktivitet } from '../../models/aktivitet';
import { Valg } from '../../models/valg';
import { Item } from '../../models/liste';
import { stringArrayToItems } from './utils';
import { Kategori } from '../../models/kategori';

export function getFjellturTing(valg: Valg): Item[] {
    let fjellturTing: string[] = [];

    const tinderangling = valg.aktiviteter.includes(Aktivitet.Tinderangling);
    const fottur = valg.aktiviteter.includes(Aktivitet.Fottur);

    fjellturTing.push('Fjellsko');
    fjellturTing.push('Regntrekk til sekk');

    return stringArrayToItems(fjellturTing, Kategori.TekniskUtstyr);
}
