import Modal from "../layout/Modal";
import { useState } from "react";
import { useTransactions } from "../../context/finances.context";

const typeofExpenses = ["Comida", "Contas", "Fatura"];

const AddExpense = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [expenseType, setExpenseType] = useState("Comida");
  const [expenseValue, setExpenseValue] = useState("");

  const onChangeExpenseTypeHandler = (event) => {
    setExpenseType(event.target.value);
  };

  const onChangeExpenseValueHandler = (event) => {
    setExpenseValue(event.target.value);
  };

  const submitAddExpenseFormHandler = (event) => {
    event.preventDefault();
    const transaction = {
      type: expenseType,
      payment: "Cash",
      value: Number(expenseValue),
      date: new Date(),
    };
    if (!expenseValue) return;
    addTransactionHandler(transaction);
    props.onClose();
  };

  const mappedTransactionTypes = typeofExpenses.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  return (
    <div>
      <Modal onClose={props.onClose}>
        <form onSubmit={submitAddExpenseFormHandler} className="column">
          <h1 style={{ color: "red" }}>Add new expense</h1>
          <select onChange={onChangeExpenseTypeHandler} value={expenseType}>
            {mappedTransactionTypes}
          </select>
          <input
            value={expenseValue}
            onChange={onChangeExpenseValueHandler}
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
