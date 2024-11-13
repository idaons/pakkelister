import { IValg } from "./types";
import { useLocalStorageValue } from "./useLocalStorageValue";

const localStorageKeyPrefix = "pakkelister";

// Dette er strukturen som lagres i local storage, så endringer her kan føre til at gamle lister ikke lenger fungerer
export type LocalStorageListe = {
  listeNavn: string;
  valg: IValg;
  checked: string[];
  ekstraItems: string[];
};

export const useAllLists = () =>
  useLocalStorageValue<LocalStorageListe[]>(localStorageKeyPrefix);

export const useList = (listName: string, valg: IValg) => {
  const [lists, setLists] = useAllLists();
  const initialValue: LocalStorageListe = {
    listeNavn: listName,
    valg,
    checked: [],
    ekstraItems: [],
  };

  const currentList: LocalStorageListe =
    (lists ?? []).find(
      (list: LocalStorageListe) => list.listeNavn === listName,
    ) || initialValue;

  const updateList = (update: Partial<LocalStorageListe>) => {
    const updatedList = {
      ...currentList,
      ...update,
    };

    const otherLists =
      (lists ?? []).filter((list) => list.listeNavn !== listName) ?? [];

    setLists([...otherLists, updatedList]);
  };

  return { list: currentList, updateList };
};
