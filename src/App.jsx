import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Goals, Invoices, Activities } from "./components";
import { CreditCardPage, Budget, Dashboard } from "./pages";
import { useTransactions } from "./context/finances.context";

function App() {
  const { incomes, expenses, transactions } = useTransactions();
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const toggleShowAddTransactionHandler = () =>
    setShowAddTransaction((prev) => !prev);

  const hideAddTransactionHandler = () => setShowAddTransaction(false);

  return (
    <>
      <Navbar
        showAddTransaction={showAddTransaction}
        onToggleShowAddTransaction={toggleShowAddTransactionHandler}
        onHideAddTransaction={hideAddTransactionHandler}
      />
      <div onClick={hideAddTransactionHandler} className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/credit-card" element={<CreditCardPage />} />
          <Route path="/credit-card/:creditCardId" element={<Invoices />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/budget" element={<Budget />} />
          <Route
            path="/transactions"
            element={
              <Activities title="Your activities" transactions={transactions} />
            }
          />
          <Route
            path="/incomes"
            element={<Activities title="Incomes" transactions={incomes} />}
          />
          <Route
            path="/expenses"
            element={<Activities title="Expenses" transactions={expenses} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
