import { Valg } from "../models/valg";

const localStorageKey = "pakkelister";

type LocalStorageListe = {
  valg: Valg;
  listeNavn?: string;
  checked: string[];
  ekstraItems: string[];
};

export class PakkeAppLocalStorage {
  private static getLocalStorage() {
    if (typeof window === "undefined") {
      return undefined;
    }
    return window.localStorage;
  }

  static getLists(): LocalStorageListe[] {
    const lists = this.getLocalStorage()?.getItem(localStorageKey);
    return lists ? JSON.parse(lists) : [];
  }

  static getList(navn?: string): LocalStorageListe | undefined {
    return this.getLists().find((liste) => liste.listeNavn === navn);
  }

  static saveList(liste: LocalStorageListe) {
    const lists = this.getLists().filter(
      (listFraLs) => listFraLs.listeNavn !== liste.listeNavn
    );
    const nyeLister = [...lists, liste];
    this.getLocalStorage()?.setItem(localStorageKey, JSON.stringify(nyeLister));
  }
}
