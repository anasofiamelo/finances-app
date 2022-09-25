import Modal from "./layout/Modal";
import { useState } from "react";
import { useTransactions } from "../context/finances.context";

const recorrencias = ["Uma vez", "Todo mês", "Todo dia", "Todo ano"];

const AddTransaction = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [transactionType, setTransactionType] = useState(
    props.typesOfTransactions[0]
  );
  const [transactionValue, setTransactionValue] = useState("");
  const [recorrencia, setRecorrencia] = useState("");

  const onChangeTransactionTypeHandler = (event) => {
    setTransactionType(event.target.value);
  };

  const onChangeRecorrenciaHandler = (event) => {
    setRecorrencia(event.target.value);
  };

  const onChangeTransactionValueHandler = (event) => {
    setTransactionValue(event.target.value);
  };

  const submitAddTransactionFormHandler = (event) => {
    event.preventDefault();
    const value =
      props.transactionType === "income"
        ? Number(transactionValue)
        : Number(-transactionValue);

    const transaction = {
      type: transactionType,
      payment: "Cash",
      value,
      date: new Date(),
    };

    if (!transactionValue) return;

    addTransactionHandler(transaction);
    props.onClose();
  };

  const mappedTransactionTypes = props.typesOfTransactions.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  const mappedRecorrencia = recorrencias.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  let valuePlaceholder =
    props.transactionType === "income" ? "Valor ganho" : "Valor gasto";

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitAddTransactionFormHandler} className="column">
        <h1>Add new {props.transactionType}</h1>

        <select
          onChange={onChangeTransactionTypeHandler}
          value={transactionType}
        >
          {mappedTransactionTypes}
        </select>

        <select onChange={onChangeRecorrenciaHandler} value={recorrencia}>
          {mappedRecorrencia}
        </select>

        <input
          value={transactionValue}
          onChange={onChangeTransactionValueHandler}
          type="number"
          placeholder={valuePlaceholder}
        ></input>

        <button type="submit">Add {props.transactionType}</button>
      </form>
    </Modal>
  );
};

export default AddTransaction;
