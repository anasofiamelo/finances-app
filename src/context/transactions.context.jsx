import { createContext, useContext, useState, useEffect } from "react";
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
import { db } from "../services/firebase_config";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const [userTransactions, setUserTransactions] = useState([]);
  const [userLatestTransactions, setUserLatestTransactions] = useState([]);

  async function getUserTransactions(userId) {
    try {
      const docRef = collection(db, "users", userId, "transactions");
      const docsSnap = await getDocs(docRef);
      return docsSnap.docs.map((doc) => ({ ...doc.data() }));
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    async function getTransactions() {
      const transactions = await getUserTransactions("pW0gkZUkWWE75svpE6wt");
      setUserTransactions(transactions);
      setUserLatestTransactions(transactions.slice(0, 5));
    }

    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ userTransactions, userLatestTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
