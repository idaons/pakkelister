import { useState, useEffect } from "react";

export const useLocalStorageValue = <T extends object>(key: string) => {
  const [value, setValue] = useState<T>();
  const [status, setStatus] = useState<"loading" | "ready">("loading");

  // Initially load value from localStorage
  useEffect(() => {
    if (status === "ready") return;
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue) setValue(JSON.parse(localStorageValue));
    setStatus("ready");
  }, [key, status]);

  // Initiate a reload of the value from localStorage if the key changes
  useEffect(() => {
    setStatus("loading");
  }, [key]);

  const setLocalStorageValue = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setLocalStorageValue] as const;
};
