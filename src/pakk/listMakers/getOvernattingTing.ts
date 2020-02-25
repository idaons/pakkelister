import { Kategori } from '../../models/kategori';
import { Valg } from '../../models/valg';
import { Overnatting } from '../../models/overnatting';
import { sikkerhetVinter, stringArrayToItems } from './utils';
import { Item } from '../../models/liste';

export function getOvernattingTing(valg: Valg): Item[] {
    let overnattingTing = [];

    if (sikkerhetVinter(valg)) {
        overnattingTing.push('Vindsekk');
    }

    if (sikkerhetVinter(valg) || valg.overnatting.includes(Overnatting.Telt)) {
        overnattingTing.push('Liggeunderlag', 'Sovepose');
    }

    if (valg.overnatting.includes(Overnatting.Telt)) {
        overnattingTing.push('Telt', 'Primus', 'Kokesaker');
    }

    if (valg.overnatting.includes(Overnatting.DNThytte)) {
        overnattingTing.push('Lakenpose');
    }

    if ([Overnatting.DNThytte, Overnatting.Telt].some(it => valg.overnatting.includes(it))) {
        overnattingTing.push('Tøfler/Innesko');
    }

    return stringArrayToItems(overnattingTing, Kategori.Overnatting);
}
