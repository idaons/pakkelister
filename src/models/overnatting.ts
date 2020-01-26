import { getEnumAsArray } from '../utils/enum';

export enum Overnatting {
    DNThytte,
    Telt,
    HusHotell,
}

export function getOvernattingArray(): Overnatting[] {
    return getEnumAsArray(Overnatting);
}
