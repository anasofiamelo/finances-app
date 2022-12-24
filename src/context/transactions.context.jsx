import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../services/firebase_config";
import { useAuth } from "./auth.context";
// import useSort from "../hooks/useSort";
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

  const getTransacRef = useCallback(
    async (transacId) => {
      return await doc(db, "users", currentUserId, "transactions", transacId);
    },
    [currentUserId]
  );

  const updateTransaction = useCallback(
    async (transacId, editedTransac) => {
      try {
        const transacRef = await getTransacRef(transacId);
        const date = new Date(editedTransac.date.format("MM-DD-YYYY"));

        await updateDoc(transacRef, { ...editedTransac, date });
        await getUserTransactions();
      } catch (error) {
        console.log("error", error);
      }
    },
    [getTransacRef, getUserTransactions]
  );

  const deleteTransaction = useCallback(
    async (transacId) => {
      try {
        const transacRef = await getTransacRef(transacId);
        await deleteDoc(transacRef);
        await getUserTransactions();
      } catch (error) {
        console.log("error", error);
      }
    },
    [getTransacRef, getUserTransactions]
  );
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
      value={{
        userTransactions,
        userLatestTransactions,
        addTransaction,
        deleteTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
