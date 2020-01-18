import { ListeElement } from '../../models/liste';
import { Kategori } from '../../models/kategori';
import { Valg } from '../../models/valg';
import { Overnatting } from '../../models/overnatting';

export function stringTilListeelement(ting: string, kategori: Kategori): ListeElement {
    return {
        navn: ting,
        antall: 1,
        kategori: kategori,
    };
}

export function stringsTilListeElement(ting: string[], kategori: Kategori): ListeElement[] {
    return ting.map(it => stringTilListeelement(it, kategori));
}

export function overnatting(valg: Valg) {
    return valg.overnatting !== Overnatting.IkkeOvernatting;
}
