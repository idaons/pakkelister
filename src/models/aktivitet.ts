import { getEnumAsArray } from '../utils/enum';

export enum Aktivitet {
    Klatring,
    Fottur,
    Tinderangling,
    Jogging,
    Randonée,
    Isbre,
    Fjellski,
    Langrenn,
    Skøyteski,
    Fest,
    Bytur,
    Fotografi,
}

export function getAktivitetAsArray(): Aktivitet[] {
    return getEnumAsArray(Aktivitet);
}

export function erSommerAktivitet(aktivitet: Aktivitet) {
    return [
        Aktivitet.Klatring,
        Aktivitet.Fottur,
        Aktivitet.Tinderangling,
        Aktivitet.Jogging,
    ].includes(aktivitet);
}

export function erVinterAktivitet(aktivitet: Aktivitet) {
    return [
        Aktivitet.Randonée,
        Aktivitet.Fjellski,
        Aktivitet.Langrenn,
        Aktivitet.Skøyteski,
    ].includes(aktivitet);
}

export function erAnnenAktivitet(aktivitet: Aktivitet) {
    return [Aktivitet.Fest, Aktivitet.Bytur].includes(aktivitet);
}
