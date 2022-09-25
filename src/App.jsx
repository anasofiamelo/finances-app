import { Route, Routes } from "react-router-dom";
import { useTransactions } from "./context/finances.context";
import { Balance, Incomes, Expenses, Navbar } from "./components";

function App() {
  const { totalBalance } = useTransactions();
  return (
    <>
      <Navbar />
      <h3>
        Saldo{" "}
        <span style={{ color: `${totalBalance > 0 ? "green" : "red"}` }}>
          ${totalBalance}
        </span>
      </h3>
      <Routes>
        <Route path="/transactions" element={<Balance />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/fatura" />
      </Routes>
    </>
  );
}

export default App;
