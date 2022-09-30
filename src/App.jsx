import { Route, Routes } from "react-router-dom";
import { useTransactions } from "./context/finances.context";
import { Balance, Navbar, Fatura, Goals, CreditCard } from "./components";

function App() {
  const { totalBalance } = useTransactions();
  return (
    <>
      <Navbar />
      <h3>
        Saldo{" "}
        <span
          style={{
            color: `${totalBalance > 0 ? "var(--green)" : "var(--red)"}`,
          }}
        >
          ${totalBalance}
        </span>
      </h3>
      <Routes>
        <Route path="/transactions" element={<Balance />} />
        <Route path="/credit-card" element={<Fatura />} />
        <Route path="/credit-card/:creditCard" element={<CreditCard />} />
        <Route path="/metas" element={<Goals />} />
      </Routes>
    </>
  );
}

export default App;
