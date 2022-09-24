import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { TransactionsContextProvider } from "./context/finances.context";
import { Balance } from "./components";
function App() {
  return (
    <div className="App">
      <TransactionsContextProvider>
        <Navbar />
        <Routes>
          <Route path="/transactions" element={<Balance />} />
        </Routes>
      </TransactionsContextProvider>
    </div>
  );
}

export default App;
