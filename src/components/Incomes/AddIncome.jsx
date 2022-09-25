import React from "react";
import { AddTransaction } from "..";

const typeofIncomes = ["Vendas", "Salário", "Caju"];

const AddExpense = (props) => {
  return (
    <>
      <AddTransaction
        onClose={props.onClose}
        transactionType="income"
        typesOfTransactions={typeofIncomes}
      />
    </>
  );
};

export default AddExpense;
