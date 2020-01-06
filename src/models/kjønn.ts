import {getEnumAsArray} from "../utils/enum";

export enum Kjønn {
    Mann,
    Kvinne,
    Begge,
    VilIkkeOppgi
}

export function getKjønnArray(): Kjønn[] {
    return getEnumAsArray(Kjønn);
}
