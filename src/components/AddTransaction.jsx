import { useState } from "react";
import { Modal, Input } from "../components";
import { useTransactions } from "../context/finances.context";

const AddTransaction = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [transactionType, setTransactionType] = useState(
    props.typesOfTransactions[0]
  );
  const [transactionValue, setTransactionValue] = useState(0);
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionDate, setTransactionDate] = useState("");

  const changeTransactionDescriptionHandler = (event) => {
    setTransactionDescription(event.target.value);
  };

  const changeTransactionTypeHandler = (event) => {
    setTransactionType(event.target.value);
  };

  const changeTransactionValueHandler = (event) => {
    setTransactionValue(event.target.value);
  };
  const changeTransactionDateHandler = (event) => {
    setTransactionDate(event.target.value);
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
      description: transactionDescription,
      date: new Date(transactionDate),
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

  let valuePlaceholder =
    props.transactionType === "income" ? "Valor ganho" : "Valor gasto";

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitAddTransactionFormHandler} className="column">
        <h1>Add new {props.transactionType}</h1>

        <select onChange={changeTransactionTypeHandler} value={transactionType}>
          {mappedTransactionTypes}
        </select>

        <Input
          value={transactionDescription}
          onChange={changeTransactionDescriptionHandler}
          placeholder="Description"
        />

        <Input
          value={transactionValue}
          onChange={changeTransactionValueHandler}
          type="number"
          placeholder={valuePlaceholder}
        />

        <Input
          value={transactionDate}
          onChange={changeTransactionDateHandler}
          type="date"
        />

        <Input
          value="Once"
          type="radio"
          name="recorrencia"
          label="Once"
          id="once"
        />

        <Input
          value="Monthly"
          type="radio"
          name="recorrencia"
          label="Monthly"
          id="monthly"
        />

        <button
          style={{
            backgroundColor: `${
              props.transactionType === "expense"
                ? "var(--red)"
                : "var(--green)"
            }`,
          }}
          type="submit"
        >
          Add {props.transactionType}
        </button>
      </form>
    </Modal>
  );
};

export default AddTransaction;
