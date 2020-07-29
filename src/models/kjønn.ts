import {getEnumAsArray} from "../utils/enum";

export enum Kjønn {
    Mann,
    Kvinne,
    VilIkkeOppgi
}

export function getKjønnLabel(k : Kjønn) {
    let label = "";
    switch (k) {
        case Kjønn.VilIkkeOppgi :
            label = "Vil ikke oppgi";
            break;
        default:
            label = Kjønn[k];
    }
    return label;
}

export function getKjønnArray(): Kjønn[] {
    return getEnumAsArray(Kjønn);
}
