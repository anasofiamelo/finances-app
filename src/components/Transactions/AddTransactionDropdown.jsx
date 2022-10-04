import React, { useState } from "react";
import { BiLineChart, BiLineChartDown } from "react-icons/bi";
import { typeofExpenses, typeofIncomes } from "../../utils";
import { AddTransaction } from "../../components";
import "./dropdown.css";

const AddTransactionDropdown = () => {
  const [openIncomeModal, setOpenIncomeModal] = useState();
  const [openExpenseModal, setOpenExpenseModal] = useState();

  const showOpenIncomeModalHandler = () => {
    setOpenIncomeModal(true);
  };
  const hideOpenIncomeModalHandler = () => {
    setOpenIncomeModal(false);
  };
  const showOpenExpenseModalHandler = () => {
    setOpenExpenseModal(true);
  };
  const hideOpenExpenseModalHandler = () => {
    setOpenExpenseModal(false);
  };

  return (
    <div className="dropdown-container">
      <div onClick={showOpenIncomeModalHandler} className="dropdown-item">
        <BiLineChart style={{ fontSize: "1.5rem", color: "var(--green)" }} />
        Income
      </div>
      <div onClick={showOpenExpenseModalHandler} className="dropdown-item">
        <BiLineChartDown style={{ fontSize: "1.5rem", color: "var(--red)" }} />
        Expense
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
    </div>
  );
};

export default AddTransactionDropdown;
