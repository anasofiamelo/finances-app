import React, { useState } from "react";
import { BiLineChart, BiLineChartDown } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { typeofExpenses, typeofIncomes } from "../../utils";
import { AddTransaction, AddInvoiceModal } from "../../components";
import "./dropdown.css";

const AddTransactionDropdown = () => {
  const [openIncomeModal, setOpenIncomeModal] = useState();
  const [openExpenseModal, setOpenExpenseModal] = useState();
  const [openCreditCardInvoiceModal, setOpenCreditCardInvoiceModal] =
    useState();

  const openIncomeModalHandler = () => {
    setOpenIncomeModal(true);
  };
  const hideOpenIncomeModalHandler = () => {
    setOpenIncomeModal(false);
  };
  const openExpenseModalHandler = () => {
    setOpenExpenseModal(true);
  };
  const hideOpenExpenseModalHandler = () => {
    setOpenExpenseModal(false);
  };
  const openCreditCardInvoiceModalHandler = () => {
    setOpenCreditCardInvoiceModal(true);
  };
  const hideOpenCreditCardInvoiceModalHandler = () => {
    setOpenCreditCardInvoiceModal(false);
  };

  return (
    <div className="dropdown-container">
      <div onClick={openIncomeModalHandler} className="dropdown-item">
        <BiLineChart style={{ fontSize: "1.5rem", color: "var(--green)" }} />
        Income
      </div>
      <div onClick={openExpenseModalHandler} className="dropdown-item">
        <BiLineChartDown style={{ color: "var(--red)" }} />
        Expense
      </div>
      <div
        onClick={openCreditCardInvoiceModalHandler}
        className="dropdown-item"
      >
        <BsCreditCard style={{ color: "var(--purple)" }} />
        Card Invoice
      </div>

      {openIncomeModal && (
        <AddTransaction
          onClose={hideOpenIncomeModalHandler}
          transactionType="Income"
          transactionCategories={typeofIncomes}
        />
      )}

      {openExpenseModal && (
        <AddTransaction
          onClose={hideOpenExpenseModalHandler}
          transactionType="Expense"
          transactionCategories={typeofExpenses}
        />
      )}

      {openCreditCardInvoiceModal && (
        <AddInvoiceModal onClose={hideOpenCreditCardInvoiceModalHandler} />
      )}
    </div>
  );
};

export default AddTransactionDropdown;
