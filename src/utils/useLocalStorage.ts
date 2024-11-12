import {
  StringifiedValg,
  stringifyValg,
  unStringifyValg,
} from "./encodeValgToUrlParams";
import { Modify } from "./typeUtils";
import { Valg } from "../models/valg";
import useIsClient from "./useIsClient";

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

export const useLocalStorage = () => {
  const isClient = useIsClient();
  function getLocalStorage() {
    if (!isClient) {
      return undefined;
    }
    return window.localStorage;
  }

  function getLists(): StringifiedLocalStorageListe[] {
    const lists = getLocalStorage()?.getItem(localStorageKey);
    return lists ? JSON.parse(lists) : [];
  }

  function getList(navn?: string): LocalStorageListe | undefined {
    const liste = getLists().find((liste) => liste.listeNavn === navn);
    return liste ? { ...liste, valg: unStringifyValg(liste.valg) } : undefined;
  }

  function saveList(liste: LocalStorageListe) {
    const lists = getLists().filter(
      (listFraLs) => listFraLs.listeNavn !== liste.listeNavn,
    );
    const nyeLister = [...lists, { ...liste, valg: stringifyValg(liste.valg) }];
    getLocalStorage()?.setItem(localStorageKey, JSON.stringify(nyeLister));
  }

  return { saveList, getList, getLists, isReady: !!getLocalStorage() };
};
