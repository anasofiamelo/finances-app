import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Balance, Navbar, Goals, CreditCardInvoices } from "./components";
import { CreditCardPage, Budget } from "./pages";

function App() {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const toggleAddTransactionHandler = () => {
    setShowAddTransaction((prev) => !prev);
  };

  const hideAddTransactionHandler = () => {
    setShowAddTransaction(false);
  };

  return (
    <>
      <Navbar
        showAddTransaction={showAddTransaction}
        onToggleAddTransaction={toggleAddTransactionHandler}
        onHideAddTransaction={hideAddTransactionHandler}
      />
      <div onClick={hideAddTransactionHandler}>
        <Routes>
          <Route path="/transactions" element={<Balance />} />
          <Route path="/credit-card" element={<CreditCardPage />} />
          <Route
            path="/credit-card/:creditCard"
            element={<CreditCardInvoices />}
          />
          <Route path="/goals" element={<Goals />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
