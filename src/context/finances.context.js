import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { finances } from "../utils";
import useSort from "../hooks/useSort";
function sumValues(array) {
  return array.reduce((prev, current) => prev + current.value, 0);
}

const TransactionsContext = createContext({});

export const TransactionsContextProvider = (props) => {
  const sortedTransactions = useSort(finances, "date", true);
  const [transactions, setTransactions] = useState(sortedTransactions);
  const [totalBalance, setTotalBalance] = useState();
  const [totalIncomes, setTotalIncomes] = useState();
  const [totalExpenses, setTotalExpenses] = useState();

  const incomes = transactions.filter((transaction) => transaction.value > 0);
  const expenses = transactions.filter((transaction) => transaction.value < 0);

  const updateTotalBalanceHandler = useCallback(() => {
    const total = sumValues(transactions);
    setTotalBalance(total.toFixed(2));
  }, [transactions]);

  const updateTotalIncomesHandler = useCallback(() => {
    const total = sumValues(incomes);
    setTotalIncomes(total.toFixed(2));
  }, [incomes]);

  const updateTotalExpensesHandler = useCallback(() => {
    const total = sumValues(expenses);
    setTotalExpenses(total.toFixed(2));
  }, [expenses]);

  function addTransactionHandler(transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  useEffect(() => {
    updateTotalBalanceHandler();
    updateTotalIncomesHandler();
    updateTotalExpensesHandler();
  }, [
    transactions,
    updateTotalBalanceHandler,
    updateTotalIncomesHandler,
    updateTotalExpensesHandler,
  ]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        totalBalance,
        totalIncomes,
        totalExpenses,
        incomes,
        expenses,
        addTransactionHandler,
      }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
};

export default TransactionsContext;
