import React from "react";
import Modal from "../layout/Modal";
import { useState } from "react";
import { useTransactions } from "../../context/finances.context";

const typeofIncomes = ["Vendas", "Salário", "Caju"];

const AddExpense = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [incomeType, setIncomeType] = useState("Comida");
  const [incomeValue, setIncomeValue] = useState("");

  const onChangeIncomeTypeHandler = (event) => {
    setIncomeType(event.target.value);
  };

  const onChangeIncomeValueHandler = (event) => {
    setIncomeValue(event.target.value);
  };

  const submitAddIncomeFormHandler = (event) => {
    event.preventDefault();
    const transaction = {
      type: incomeType,
      payment: "Cash",
      value: Number(incomeValue),
      date: new Date(),
    };
    if (!incomeValue) return;
    addTransactionHandler(transaction);
    props.onClose();
  };

  const mappedTransactionTypes = typeofIncomes.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  return (
    <div>
      <Modal onClose={props.onClose}>
        <form onSubmit={submitAddIncomeFormHandler} className="column">
          <h1 style={{ color: "green" }}>Add new income</h1>
          <select onChange={onChangeIncomeTypeHandler} value={incomeType}>
            {mappedTransactionTypes}
          </select>
          <input
            value={incomeValue}
            onChange={onChangeIncomeValueHandler}
            type="number"
            placeholder="Valor"
          ></input>
          <button type="submit">Add</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddExpense;
