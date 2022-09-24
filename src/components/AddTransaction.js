import Modal from "./Modal";
import { useState } from "react";
import { useTransactions } from "../context/finances.context";
const typeofTransactions = ["Comida", "Contas", "Fatura", "Salário"];

const AddTransaction = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [transactionType, setTransactionType] = useState("Comida");
  const [transactionValue, setTransactionValue] = useState("");

  const onChangeTransactionTypeHandler = (event) => {
    setTransactionType(event.target.value);
  };

  const onChangeTransactionValueHandler = (event) => {
    setTransactionValue(event.target.value);
  };

  const submitAddTransactionFormHandler = (event) => {
    event.preventDefault();
    const transaction = {
      type: transactionType,
      payment: "Cash",
      value: Number(transactionValue),
      date: new Date(),
    };
    if (!transactionValue) return;
    addTransactionHandler(transaction);
    props.onClose();
  };

  const mappedTransactionTypes = typeofTransactions.map((type) => (
    <option value={type}>{type}</option>
  ));

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitAddTransactionFormHandler} className="column">
        <h1>Add new transaction</h1>
        <select
          onChange={onChangeTransactionTypeHandler}
          value={transactionType}
        >
          {mappedTransactionTypes}
        </select>
        <input
          value={transactionValue}
          onChange={onChangeTransactionValueHandler}
          type="number"
          placeholder="Valor"
        ></input>
        <button type="submit">Add</button>
      </form>
    </Modal>
  );
};

export default AddTransaction;
