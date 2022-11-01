import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TransactionsContextProvider } from "./context/finances.context";
import { CreditCardContextProvider } from "./context/credit_card.context";
import "./styles/index.css";
import "./styles/default.css";
import "./styles/tables.css";
import "./styles/forms.css";
import "./styles/buttons.css";
import "./styles/navbar.css";
// import "./styles/components/CreditCard/credit_card.css";
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
