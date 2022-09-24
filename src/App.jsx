// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  TransactionsContextProvider,
  useTransactions,
} from "./context/finances.context";
import Navbar from "./components/layout/Navbar";
import { Balance, Incomes, Expenses } from "./components";

function App() {
  const { totalBalance } = useTransactions();
  console.log(totalBalance);
  return (
    <>
      <TransactionsContextProvider>
        <Navbar />
        <p>olá {String(totalBalance)}</p>
        <Routes>
          <Route path="/transactions" element={<Balance />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </TransactionsContextProvider>
    </>
  );
}

export default App;
