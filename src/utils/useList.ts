import { Valg } from "../models/valg";
import { useLocalStorageValue } from "./useLocalStorageValue";

const localStorageKeyPrefix = "pakkelister";

export type LocalStorageListe = {
  listeNavn: string;
  valg: Valg;
  checkedItems: string[];
  extraItems: string[];
};

export const useAllLists = () =>
  useLocalStorageValue<LocalStorageListe[]>(localStorageKeyPrefix);

export const useList = (listName: string, valg: Valg) => {
  const [lists, setLists] = useAllLists();
  const initialValue: LocalStorageListe = {
    listeNavn: listName,
    valg,
    checkedItems: [],
    extraItems: [],
  };

  const currentList =
    lists?.find((list) => list.listeNavn === listName) || initialValue;

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
