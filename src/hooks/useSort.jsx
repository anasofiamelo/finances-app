const useSort = (list, comparableKey, isDecrescent = false) => {
  const sortCrescent = () =>
    [...list].sort((a, b) => a[comparableKey] - b[comparableKey]);

  const sortDecrescent = () =>
    [...list].sort((a, b) => b[comparableKey] - a[comparableKey]);

  return isDecrescent === true ? sortDecrescent() : sortCrescent();
};

export default useSort;
