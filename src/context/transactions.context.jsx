import { createContext, useContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/firebase_config";
import { useAuth } from "./auth.context";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const { currentUserId } = useAuth();
  const [userTransactions, setUserTransactions] = useState([]);
  const [userLatestTransactions, setUserLatestTransactions] = useState([]);

  async function getCurrentUserTransactions(userId) {
    try {
      const docRef = collection(db, "users", userId, "transactions");
      const docsSnap = await getDocs(docRef);
      return docsSnap.docs.map((doc) => ({ transacId: doc.id, ...doc.data() }));
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    async function getTransactions() {
      const transactions = await getCurrentUserTransactions(currentUserId);
      setUserTransactions(transactions);
      setUserLatestTransactions(transactions.slice(0, 5));
    }

    getTransactions();
  }, [currentUserId]);

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
