import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { finances } from "../utils";

const TransactionsContext = createContext({});

export const TransactionsContextProvider = (props) => {
  const [transactions, setTransactions] = useState(finances);
  const [totalBalance, setTotalBalance] = useState();

  const incomes = transactions.filter((transaction) => transaction < 0);
  const expenses = transactions.filter((transaction) => transaction > 0);

  const updateTotalBalanceHandler = useCallback(() => {
    const total = transactions.reduce(
      (prev, current) => prev + current.value,
      0
    );
    setTotalBalance(total.toFixed(2));
  }, [transactions]);

  function addTransactionHandler(transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  useEffect(() => {
    updateTotalBalanceHandler();
  }, [transactions, updateTotalBalanceHandler]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        totalBalance,
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
