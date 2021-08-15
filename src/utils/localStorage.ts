import {
  StringifiedValg,
  stringifyValg,
  unStringifyValg,
} from "./encodeValgToUrlParams";
import { Modify } from "./typeUtils";
import { Valg } from "../models/valg";

const localStorageKey = "pakkelister";

type StringifiedLocalStorageListe = {
  valg: StringifiedValg;
  listeNavn?: string;
  checked: string[];
  ekstraItems: string[];
};

type LocalStorageListe = Modify<
  StringifiedLocalStorageListe,
  {
    valg: Valg;
  }
>;

export class PakkeAppLocalStorage {
  private static getLocalStorage() {
    if (typeof window === "undefined") {
      return undefined;
    }
    return window.localStorage;
  }

  static getLists(): StringifiedLocalStorageListe[] {
    const lists = this.getLocalStorage()?.getItem(localStorageKey);
    return lists ? JSON.parse(lists) : [];
  }

  static getList(navn?: string): LocalStorageListe | undefined {
    const liste = this.getLists().find((liste) => liste.listeNavn === navn);
    return liste ? { ...liste, valg: unStringifyValg(liste.valg) } : undefined;
  }

  static saveList(liste: LocalStorageListe) {
    const lists = this.getLists().filter(
      (listFraLs) => listFraLs.listeNavn !== liste.listeNavn
    );
    const nyeLister = [...lists, { ...liste, valg: stringifyValg(liste.valg) }];
    this.getLocalStorage()?.setItem(localStorageKey, JSON.stringify(nyeLister));
  }
}
