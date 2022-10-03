import { Route, Routes } from "react-router-dom";
import { useTransactions } from "./context/finances.context";
import { Balance, Navbar, Goals, CreditCard, Container } from "./components";
import { CreditCardPage } from "./pages";
import { BiWallet } from "react-icons/bi";

function App() {
  const { totalBalance } = useTransactions();
  return (
    <>
      <Navbar />
      <Container>
        <h3>
          <div className="row wallet">
            <span className="row">
              <BiWallet style={{ marginRight: "1rem" }} />
              Your Wallet
            </span>
            <span className="line" />
            <span
              style={{
                color: `${totalBalance > 0 ? "var(--green)" : "var(--red)"}`,
              }}
            >
              $ {totalBalance}
            </span>
          </div>
        </h3>
      </Container>
      <Routes>
        <Route path="/transactions" element={<Balance />} />
        <Route path="/credit-card" element={<CreditCardPage />} />
        <Route path="/credit-card/:creditCard" element={<CreditCard />} />
        <Route path="/metas" element={<Goals />} />
      </Routes>
    </>
  );
}

export default App;
