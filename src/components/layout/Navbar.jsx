import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddIncome, AddExpense, AddTransaction } from "../../components";

import { FiPlusCircle } from "react-icons/fi";

const navlinks = [
  { title: "Transactions", link: "/transactions" },
  { title: "Incomes", link: "/incomes" },
  { title: "Expenses", link: "/expenses" },
  { title: "Credit Card", link: "/credit-card" },
  { title: "Metas", link: "/metas" },
  { title: "Orçamento", link: "/orcamento" },
];

const Navbar = (props) => {
  const [showAddIncome, setShowAddIncome] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const showAddIncomeHandler = () => {
    setShowAddIncome(true);
  };
  const hideAddIncomeHandler = () => {
    setShowAddIncome(false);
  };
  const showAddExpenseHandler = () => {
    setShowAddExpense(true);
  };
  const hideAddExpenseHandler = () => {
    setShowAddExpense(false);
  };
  const showAddTransactionHandler = () => {
    setShowAddTransaction(true);
  };
  const hideAddTransactionHandler = () => {
    setShowAddTransaction(false);
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

        {showAddTransaction && (
          <AddTransaction
            transactionType="expense"
            typesOfTransactions={["Expense", "Income"]}
            onClose={hideAddTransactionHandler}
          />
        )}
      </ul>

      <ul className="navbar_buttons">
        <li>
          <button
            onClick={showAddIncomeHandler}
            style={{ background: "var(--green)", color: "var(--white)" }}
          >
            Add Income
            <FiPlusCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </button>
        </li>
        <li>
          <button
            onClick={showAddExpenseHandler}
            style={{ background: "var(--red)", color: "var(--white)" }}
          >
            Add Expense
            <FiPlusCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </button>
        </li>
        <li>
          <button
            onClick={showAddTransactionHandler}
            style={{ background: "var(--black)", color: "var(--white)" }}
          >
            Add Transaction
            <FiPlusCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
