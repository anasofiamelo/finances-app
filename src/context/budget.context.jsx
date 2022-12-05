import { useState, useEffect } from "react";
import { useContext, createContext } from "react";
// import { budget, formatValue } from "../utils";
import { getDocs, getDoc, doc, collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase_config";
import { useAuth } from "./auth.context";

const BudgetContext = createContext({});

export const BudgetProvider = (props) => {
  const { currentUserId } = useAuth();
  const [userBudget, setUserBudget] = useState([]);

  async function addBudget(budgetDocRef) {
    try {
      await addDoc(
        collection(db, "users", currentUserId, "budget"),
        budgetDocRef
      );
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    async function getUserBudget() {
      const budgetDocs = await getDocs(
        collection(db, "users", currentUserId, "budget")
      );

      const budgetData = budgetDocs.docs.map((doc) => ({
        budgetId: doc.id,
        ...doc.data(),
      }));

      setUserBudget(budgetData);
    }

    getUserBudget();
  }, [currentUserId]);

  return (
    <BudgetContext.Provider value={{ userBudget, addBudget }}>
      {props.children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(BudgetContext);
};

export default BudgetContext;
