import { Finance } from "./components";
import Navbar from "./components/layout/Navbar";
import { TransactionsContextProvider } from "./context/finances.context";

function App() {
  return (
    <div className="App">
      <TransactionsContextProvider>
        <Navbar />
        <Finance />
      </TransactionsContextProvider>
    </div>
  );
}

export default App;
