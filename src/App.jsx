import { Route, Routes } from "react-router-dom";
import { useTransactions } from "./context/finances.context";
import {
  Balance,
  Incomes,
  Expenses,
  Navbar,
  Fatura,
  Goals,
} from "./components";

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
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/fatura" element={<Fatura />} />
        <Route path="/metas" element={<Goals />} />
      </Routes>
    </>
  );
}

export default App;
