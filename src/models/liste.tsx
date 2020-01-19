import { Kategori } from './kategori';

export interface Item {
    skalPakkes: boolean;
    antall: number;
    navn: string;
    kategori: Kategori;
}
