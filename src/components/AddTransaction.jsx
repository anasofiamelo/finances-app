import { useState } from "react";
import { Modal, Input } from "../components";
import { useTransactions } from "../context/finances.context";

const AddTransaction = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [transactionType, setTransactionType] = useState(
    props.typesOfTransactions[0]
  );
  const [transactionValue, setTransactionValue] = useState(0);

  const [isRecurrenceOnce, setIsRecurrenceOnce] = useState(true);

  // const [isMonthlyUndefined, setIsMonthlyUndefined] = useState(false);
  // console.log(isMonthlyUndefined);

  const changeTransactionTypeHandler = (event) => {
    setTransactionType(event.target.value);
  };

  const changeTransactionValueHandler = (event) => {
    setTransactionValue(event.target.value);
  };

  const changeRecurrenceToMonthly = () => {
    setIsRecurrenceOnce(false);
  };

  const changeRecurrenceToOnce = () => {
    setIsRecurrenceOnce(true);
  };

  // const changeMonthlyToUndefined = () => {
  //   setIsMonthlyUndefined((prev) => !prev);
  // };

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

  let valuePlaceholder =
    props.transactionType === "income" ? "Valor ganho" : "Valor gasto";

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitAddTransactionFormHandler} className="column">
        <h1>Add new {props.transactionType}</h1>

        <Input
          value={transactionValue}
          onChange={changeTransactionValueHandler}
          type="number"
          placeholder={valuePlaceholder}
        />

        <select onChange={changeTransactionTypeHandler} value={transactionType}>
          {mappedTransactionTypes}
        </select>

        <Input
          value="Uma vez"
          type="radio"
          name="recorrencia"
          label="Uma vez"
          id="once"
          onChange={changeRecurrenceToOnce}
        />

        <Input
          value="Mensal"
          type="radio"
          name="recorrencia"
          label="Mensal"
          id="monthly"
          onChange={changeRecurrenceToMonthly}
        />

        {/* {!isRecurrenceOnce && (
          <Input type="date" />
          <div className="monthly">
            <Input
              value={isMonthlyUndefined}
              type="checkbox"
              label="Indefinido"
              onChange={changeMonthlyToUndefined}
            />
            {!isMonthlyUndefined && <Input type="date" />}
          </div>
        )} */}

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
