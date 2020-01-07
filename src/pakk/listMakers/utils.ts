import { ListeElement } from '../../models/liste';
import { Kategori } from '../../models/kategori';

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
