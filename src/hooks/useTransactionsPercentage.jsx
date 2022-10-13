const useTransactionsPercentage = (transactions) => {
  const allTransactionsTypes = transactions.map(
    (transaction) => transaction.type
  );

  const totalTransactions = allTransactionsTypes.length;
  const uniqueTransactions = [...new Set(allTransactionsTypes)];

  const typesLength = uniqueTransactions.map((transaction) => {
    const numTransactions = allTransactionsTypes.filter(
      (transac) => transac === transaction
    );
    return { type: transaction, length: numTransactions.length };
  });

  const typesPercentage = typesLength.map(({ type, length }) => {
    return {
      type: type,
      percentage: ((length * 100) / totalTransactions).toFixed(2),
    };
  });

  return typesPercentage;
};

export default useTransactionsPercentage;
