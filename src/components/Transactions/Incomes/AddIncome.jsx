import React from "react";
import { AddTransaction } from "../../";

const typesofIncome = ["Venda", "Salário", "Vale"];

const AddExpense = (props) => {
  return (
    <AddTransaction
      onClose={props.onClose}
      transactionType="income"
      typesOfTransactions={typesofIncome}
    />
  );
};

export default AddExpense;
