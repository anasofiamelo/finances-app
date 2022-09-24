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
  const [totalBalance, setTotalBalance] = useState(
    transactions.reduce((prev, current) => prev + current.value, 0)
  );

  const updateTotalBalanceHandler = useCallback(() => {
    const total = transactions.reduce(
      (prev, current) => prev + current.value,
      0
    );
    console.log("uopdate!!!", total);
    setTotalBalance(total);
  }, [transactions]);

  useEffect(() => {
    updateTotalBalanceHandler();
  }, [transactions, updateTotalBalanceHandler]);

  function addTransactionHandler(transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, totalBalance, addTransactionHandler }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
};

export default TransactionsContext;
