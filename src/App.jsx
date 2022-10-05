import { Route, Routes } from "react-router-dom";
import { Balance, Navbar, Goals, CreditCardInvoices } from "./components";
import { CreditCardPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/transactions" element={<Balance />} />
        <Route path="/credit-card" element={<CreditCardPage />} />
        <Route
          path="/credit-card/:creditCard"
          element={<CreditCardInvoices />}
        />
        <Route path="/metas" element={<Goals />} />
      </Routes>
    </>
  );
}

export default App;
