import { useState } from "react";
import { useContext, createContext } from "react";
import { budget, formatValue } from "../utils";
const BudgetContext = createContext({});

export const BudgetContextProvider = (props) => {
  const [userBudget, setUserBudget] = useState(budget);

  const addBudget = (budget) => {};

  return (
    <BudgetContext.Provider value={{ userBudget, addBudget }}>
      {props.children}
    </BudgetContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(BudgetContext);
};

export default BudgetContext;
