import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddIncome from "../Incomes/AddIncome";

import AddExpense from "../Expenses/AddExpense";
import { FiPlusCircle } from "react-icons/fi";

const Navbar = (props) => {
  const [showAddIncome, setShowAddIncome] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);

  const showAddIncomeHandler = () => {
    setShowAddIncome((prev) => !prev);
  };
  const showAddExpenseHandler = () => {
    setShowAddExpense((prev) => !prev);
  };
  const hideAddIncomeHandler = () => {
    setShowAddIncome(false);
  };
  const hideAddExpenseHandler = () => {
    setShowAddExpense(false);
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/transactions">Transactions</NavLink>
        </li>
        <li>
          <NavLink to="/incomes">Incomes</NavLink>
        </li>
        <li>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>
        <li>
          <NavLink to="/fatura">Fatura</NavLink>
        </li>

        {showAddIncome && <AddIncome onClose={hideAddIncomeHandler} />}
        {showAddExpense && <AddExpense onClose={hideAddExpenseHandler} />}
      </ul>

      <ul>
        <li>
          <button
            onClick={showAddIncomeHandler}
            style={{ background: "green" }}
          >
            Add Income
            <FiPlusCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </button>
        </li>
        <li>
          <button onClick={showAddExpenseHandler} style={{ background: "red" }}>
            Add Expense
            <FiPlusCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
