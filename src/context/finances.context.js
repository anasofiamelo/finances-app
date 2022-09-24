import { useContext, createContext, useState } from "react";
import { finances } from "../utils/";

const TransactionsContext = createContext({});

export const TransactionsContextProvider = (props) => {
  const [transactions, setTransactions] = useState(finances);
  console.log(transactions);
  function addTransactionHandler(transaction) {
    setTransactions((prev) => [...prev, transaction]);
    console.log("foi");
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, addTransactionHandler }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
};

export default TransactionsContext;
