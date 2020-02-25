import {objektMedAntallTilItems, overnatting, TingMedAntall} from './utils';
import {Kategori} from '../../models/kategori';
import {Valg} from "../../models/valg";
import {Sesong} from "../../models/sesong";
import {Item} from "../../models/liste";

export function getKlær(valg: Valg): Item[] {
    let klær: TingMedAntall = {};

    if (valg.sesong === Sesong.Vinter) {
        klær = {
            ...klær,
            Vindjakke: 1,
            Vindbukse: 1,
            Ulltrøye: 2,
            Ullbukse: 1,
            Fleece: 1,
            Ullsokker: 3,
            Dunjakke: 1,
            Lue: 2,
            Hansker: 1,
            Votter: 1,
            Hals: 2,
        }
    }

    if (overnatting(valg)) {
        klær = {
            ...klær,
            Truse: Math.ceil(valg.lengde / 1.5),
        }
    }

    return objektMedAntallTilItems(klær, Kategori.Klær);
}
