import { useState } from "react";
import { Modal, Input } from "../components";
import { useTransactions } from "../context/finances.context";

const typesOfTransactions = ["Expense", "Income"];
const incomesCategorys = ["Vale", "Salário"];
const expensesCategorys = ["Conta", "Telefone"];

const mappedCategorys = (categorysArr) =>
  categorysArr.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

const AddTransaction = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [transactionDescription, setTransactionDescription] = useState();
  const [transactionValue, setTransactionValue] = useState();
  const [transactionDate, setTransactionDate] = useState();
  const [transactionType, setTransactionType] = useState();
  const [transactionCategory, setTransactionCategory] = useState();
  console.log(transactionCategory);
  const changeTransactionDescriptionHandler = (event) => {
    setTransactionDescription(event.target.value);
  };

  const changeTransactionTypeHandler = (event) => {
    setTransactionType(event.target.value);
  };

  const changeTransactionCategoryHandler = (event) => {
    setTransactionCategory(event.target.value);
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
      transactionType === "Income"
        ? Number(transactionValue)
        : Number(-transactionValue);

    const transaction = {
      type: transactionCategory,
      payment: "Cash",
      value,
      description: transactionDescription,
      date: new Date(transactionDate),
    };

    if (!transactionValue) return;

    addTransactionHandler(transaction);
    props.onClose();
  };

  const transactionTypesRadio = typesOfTransactions.map((type) => (
    <Input
      style={{ marginRight: "1rem" }}
      label={type}
      key={type}
      type="radio"
      value={type}
      name="transactionType"
      onChange={changeTransactionTypeHandler}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitAddTransactionFormHandler} className="column">
        <h1>Add new transaction</h1>

        <div className="row">{transactionTypesRadio}</div>

        <Input
          value={transactionDescription}
          onChange={changeTransactionDescriptionHandler}
          placeholder="Descrição"
        />

        <Input
          value={transactionValue}
          onChange={changeTransactionValueHandler}
          type="number"
          placeholder="Valor"
        />

        {transactionType && (
          <select
            value={transactionCategory}
            onChange={changeTransactionCategoryHandler}
          >
            {transactionType === "Income"
              ? mappedCategorys(incomesCategorys)
              : mappedCategorys(expensesCategorys)}
          </select>
        )}

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
            backgroundColor: "black",
          }}
          type="submit"
        >
          Add transaction
        </button>
      </form>
    </Modal>
  );
};

export default AddTransaction;
