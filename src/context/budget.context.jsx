import { useState, useEffect, useCallback } from "react";
import { useContext, createContext } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
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
      await getUserBudget();
    } catch (error) {
      console.log("error", error);
    }
  }

  const getUserBudget = useCallback(async () => {
    const budgetDocs = await getDocs(
      collection(db, "users", currentUserId, "budget")
    );

    const budgetData = budgetDocs.docs.map((doc) => ({
      budgetId: doc.id,
      ...doc.data(),
    }));

    setUserBudget(budgetData);
  }, [currentUserId]);

  useEffect(() => {
    getUserBudget();
  }, [getUserBudget]);

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
