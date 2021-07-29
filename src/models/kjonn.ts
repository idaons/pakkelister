import {getEnumAsArray} from "../utils/enum";

export enum Kjonn {
    Mann,
    Kvinne,
    VilIkkeOppgi
}

export function getKjønnLabel(k : Kjonn) {
    let label = "";
    switch (k) {
        case Kjonn.VilIkkeOppgi :
            label = "Vil ikke oppgi";
            break;
        default:
            label = Kjonn[k];
    }
    return label;
}

export function getKjønnArray(): Kjonn[] {
    return getEnumAsArray(Kjonn);
}
