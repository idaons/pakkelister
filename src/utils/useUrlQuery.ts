import { useEffect, useState } from "react";

// Må legges i en useEffect for at dette skal funke med next-export, useRouter har ikke innhold på første render
export function useUrlQuery() {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setQuery(location.search);
  }, []);

  return query;
}
