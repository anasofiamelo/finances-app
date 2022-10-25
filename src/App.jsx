import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Goals, Invoices } from "./components";
import { CreditCardPage, Budget, Transactions, Dashboard } from "./pages";
import { useTransactions } from "./context/finances.context";

function App() {
  const { incomes, expenses } = useTransactions();
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const showAddTransactionHandler = () => {
    setShowAddTransaction(true);
  };

  const hideAddTransactionHandler = () => {
    setShowAddTransaction(false);
  };

  return (
    <>
      <Navbar
        showAddTransaction={showAddTransaction}
        onShowAddTransaction={showAddTransactionHandler}
        onHideAddTransaction={hideAddTransactionHandler}
      />
      <div onClick={hideAddTransactionHandler} className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/credit-card" element={<CreditCardPage />} />
          <Route path="/credit-card/:creditCard" element={<Invoices />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/budget" element={<Budget />} />
          <Route
            path="/transactions"
            element={<Transactions title="Your activities" />}
          />
          <Route
            path="/incomes"
            element={<Transactions title="Incomes" transactions={incomes} />}
          />
          <Route
            path="/expenses"
            element={<Transactions title="Expenses" transactions={expenses} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
