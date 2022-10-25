import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Goals, Invoices } from "./components";
import { CreditCardPage, Budget, Transactions, Dashboard } from "./pages";

function App() {
  const [showAddTransaction, setShowAddTransaction] = useState(true);
  console.log("showAddTransaction", showAddTransaction);
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
          <Route
            path="/transactions"
            element={<Transactions title="Your activities" />}
          />
          <Route path="/credit-card" element={<CreditCardPage />} />
          <Route path="/credit-card/:creditCard" element={<Invoices />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
