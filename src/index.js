import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TransactionsContextProvider } from "./context/finances.context";
import { CreditCardContextProvider } from "./context/credit_card.context";
import "./index.css";
import "./table.css";
import "./buttons.css";
import "./components/CreditCard/credit_card.css";
// import "./components/Invoices/CreditCard/credit_card.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TransactionsContextProvider>
        <CreditCardContextProvider>
          <App />
        </CreditCardContextProvider>
      </TransactionsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
