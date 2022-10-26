import { useMemo } from "react";

const useSort = (list, comparableKey, isDecrescent = false) => {
  return useMemo(() => {
    const sortCrescent = () =>
      [...list].sort((a, b) => a[comparableKey] - b[comparableKey]);

    const sortDecrescent = () =>
      [...list].sort((a, b) => b[comparableKey] - a[comparableKey]);

    return isDecrescent === true ? sortDecrescent() : sortCrescent();
  }, [list, comparableKey, isDecrescent]);
};

export default useSort;
