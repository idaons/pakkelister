import {
  StringifiedValg,
  stringifyValg,
  unStringifyValg,
} from "./encodeValgToUrlParams";
import { Modify } from "./typeUtils";
import { Valg } from "../models/valg";
import { useEffect, useState } from "react";

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

export const usePakkeAppLocalStorage = () => {
  const [localstorage, setLocalStorage] =
    useState<(typeof window)["localStorage"]>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    setLocalStorage(window.localStorage);
  }, []);

  const getLists = (): StringifiedLocalStorageListe[] => {
    const lists = localstorage?.getItem(localStorageKey);
    return lists ? JSON.parse(lists) : [];
  };

  const getList = (navn?: string): LocalStorageListe | undefined => {
    const liste = getLists().find((liste) => liste.listeNavn === navn);
    return liste ? { ...liste, valg: unStringifyValg(liste.valg) } : undefined;
  };

  const saveList = (liste: LocalStorageListe) => {
    const lists = getLists().filter(
      (listFraLs) => listFraLs.listeNavn !== liste.listeNavn
    );
    const nyeLister = [...lists, { ...liste, valg: stringifyValg(liste.valg) }];
    localstorage?.setItem(localStorageKey, JSON.stringify(nyeLister));
  };

  return { getLists, getList, saveList };
};
