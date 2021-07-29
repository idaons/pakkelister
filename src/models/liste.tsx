import { Kategori } from "./kategori";

export interface Item {
  antall: number;
  navn: string;
  kategori: Kategori;
}
