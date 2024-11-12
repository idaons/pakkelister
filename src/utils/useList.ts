import { useEffect, useState } from "react";
import { Valg } from "../models/valg";

const localStorageKeyPrefix = "pakkelister";

export type LocalStorageListe = {
  listeNavn: string;
  valg: Valg;
  checkedItems: string[];
  extraItems: string[];
};

export const useAllLists = () =>
  useLocalStorageValue<LocalStorageListe[]>(localStorageKeyPrefix);

export const useList = (listName = "default", valg: Valg) => {
  const [lists, setLists] = useAllLists();

  const currentList =
    lists?.find((list) => list.listeNavn === listName) ||
    ({
      listeNavn: listName,
      valg,
      checkedItems: [],
      extraItems: [],
    } satisfies LocalStorageListe);

  const updateList = (update: Partial<LocalStorageListe>) => {
    const updatedList = {
      ...currentList,
      ...update,
    };

    const otherLists =
      lists?.filter((list) => list.listeNavn !== listName) ?? [];

    setLists([...otherLists, updatedList]);
  };

  return { list: currentList, updateList };
};

const useLocalStorageValue = <T extends object>(key: string) => {
  const [value, setValue] = useState<T>();
  const [status, setStatus] = useState<"loading" | "syncedWithLocalStorage">(
    "loading",
  );

  useEffect(() => {
    if (status === "syncedWithLocalStorage") return;
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue) setValue(JSON.parse(localStorageValue));
    setStatus("syncedWithLocalStorage");
  }, [key, status]);

  useEffect(() => {
    setStatus("loading");
  }, [key]);

  const setLocalStorageValue = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setLocalStorageValue] as const;
};
