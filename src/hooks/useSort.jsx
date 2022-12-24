import { useMemo } from "react";

const useSort = (list, comparableKey, decrease = false) => {
  return useMemo(() => {
    const sortCrescent = () =>
      [...list].sort((a, b) => a[comparableKey] - b[comparableKey]);

    const sortDecrescent = () =>
      [...list].sort((a, b) => b[comparableKey] - a[comparableKey]);

    return decrease ? sortDecrescent() : sortCrescent();
  }, [list, comparableKey, decrease]);
};

export default useSort;
