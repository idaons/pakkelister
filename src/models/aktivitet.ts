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
    Bytur,
    Fotografi,
    Kajakk,
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
        Aktivitet.Kajakk,
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

export function skalGåPåTur(aktiviteter: Aktivitet[]) {
    return [
        Aktivitet.Randonée,
        Aktivitet.Fjellski,
        Aktivitet.Langrenn,
        Aktivitet.Skøyteski,
        Aktivitet.Fottur,
        Aktivitet.Tinderangling,
        Aktivitet.Klatring,
    ].some((it) => aktiviteter.includes(it));
}

export function erAnnenAktivitet(aktivitet: Aktivitet) {
    return [Aktivitet.Bytur].includes(aktivitet);
}
