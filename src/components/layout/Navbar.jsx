import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddIncome, AddExpense } from "../../components";

import { FiPlusCircle } from "react-icons/fi";

const navlinks = [
  { title: "Transactions", link: "/transactions" },
  { title: "Incomes", link: "/incomes" },
  { title: "Expenses", link: "/expenses" },
  { title: "Fatura", link: "/fatura" },
];

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

  const mappedNavlinks = navlinks.map((navlink) => (
    <li key={navlink.title}>
      <NavLink to={navlink.link}>{navlink.title}</NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className="navbar_links">
        {mappedNavlinks}
        {showAddIncome && <AddIncome onClose={hideAddIncomeHandler} />}
        {showAddExpense && <AddExpense onClose={hideAddExpenseHandler} />}
      </ul>

      <ul className="navbar_buttons">
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
