import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase_config";
import { useAuth } from "./auth.context";
import moment from "moment";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const { currentUserId } = useAuth();
  const [userTransactions, setUserTransactions] = useState([]);
  const [userLatestTransactions, setUserLatestTransactions] = useState([]);

  const getUserTransactions = useCallback(async () => {
    try {
      const docRef = collection(db, "users", currentUserId, "transactions");
      const docsSnap = await getDocs(docRef);
      const transactions = docsSnap.docs.map((doc) => ({
        transacId: doc.id,
        ...doc.data(),
      }));
      const formattedTransactions = transactions.map((transaction) => ({
        ...transaction,
        date: moment(transaction.date.toDate()),
      }));
      setUserTransactions(formattedTransactions);
      setUserLatestTransactions(formattedTransactions.slice(0, 5));
    } catch (error) {
      console.log("error", error);
    }
  }, [currentUserId]);

  async function addTransaction(docRef) {
    try {
      await addDoc(
        collection(db, "users", currentUserId, "transactions"),
        docRef
      );
      await getUserTransactions();
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getUserTransactions();
  }, [getUserTransactions]);

  return (
    <TransactionsContext.Provider
      value={{ userTransactions, userLatestTransactions, addTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
