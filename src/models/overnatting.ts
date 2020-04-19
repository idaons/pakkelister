import { getEnumAsArray } from '../utils/enum';

export enum Overnatting {
    DNThytte,
    Telt,
    HusHotell,
    FamilieHytte,
}

export function getOvernattingLabel(o: Overnatting) {
    let label = '';
    switch (o) {
        case Overnatting.DNThytte:
            label = 'DNT-hytte';
            break;
        case Overnatting.FamilieHytte:
            label = 'Familie-hytte';
            break;
        case Overnatting.HusHotell:
            label = 'Hus eller hotell';
            break;
        default:
            label = Overnatting[o];
    }
    return label;
}

export function getOvernattingArray(): Overnatting[] {
    return getEnumAsArray(Overnatting);
}
