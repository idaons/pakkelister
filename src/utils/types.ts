export enum Aktivitet {
  Sportsklatring = "Sportsklatring",
  Tradklatring = "Tradklatring",
  ViaFerrata = "ViaFerrata",
  Fottur = "Fottur",
  Tinderangling = "Tinderangling",
  Jogging = "Jogging",
  Randonée = "Randonée",
  Isbre = "Isbre",
  Fjellski = "Fjellski",
  Langrenn = "Langrenn",
  Skøyteski = "Skøyteski",
  Bytur = "Bytur",
  Kajakk = "Kajakk",
  Sykkel = "Sykkel",
  Bortekontor = "Bortekontor",
}

export enum Kategori {
  Klær,
  Toalettsaker,
  TekniskUtstyr,
  Underholdning,
  Div,
  Overnatting,
  Ski,
  Sykkel,
  Kajakk,
  Matkasse,
}

export interface IValg {
  sesong: Sesong;
  aktiviteter: Aktivitet[];
  overnatting: Overnatting[];
  kjønn: Kjonn;
  lengde: number;
  idaBehov: boolean;
}

export interface Item {
  antall: number;
  navn: string;
  kategori: Kategori;
}
export enum Kjonn {
  Mann = "Mann",
  Kvinne = "Kvinne",
  Irrelevant = "Irrelevant",
}
export enum Overnatting {
  DNThytte = "DNThytte",
  Telt = "Telt",
  Hengekøye = "Hengekøye",
  HusHotell = "HusHotell",
  FamilieHytte = "FamilieHytte",
  AirBnB = "AirBnB",
}

export enum Sesong {
  Sommer = "Sommer",
  Vinter = "Vinter",
}

export type ItemsGetter = (valg: IValg) => Item[];
