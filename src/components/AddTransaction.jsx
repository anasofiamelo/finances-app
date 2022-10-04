import { useState } from "react";
import { Modal, Input, Button, Select } from "../components";
import { useTransactions } from "../context/finances.context";
import {
  BsFillCalculatorFill,
  BsJournalText,
  BsFillPlusCircleFill,
} from "react-icons/bs";

const AddTransaction = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [transactionDescription, setTransactionDescription] = useState();
  const [transactionCategory, setTransactionCategory] = useState(
    props.transactionCategories[0].value
  );
  const [transactionValue, setTransactionValue] = useState();
  const [transactionDate, setTransactionDate] = useState();

  const changeTransactionValueHandler = (event) => {
    setTransactionValue(event.target.value);
  };

  const changeTransactionDescriptionHandler = (event) => {
    setTransactionDescription(event.target.value);
  };

  const changeTransactionCategoryHandler = (event) => {
    setTransactionCategory(event.target.value);
  };

  const changeTransactionDateHandler = (event) => {
    setTransactionDate(event.target.value);
  };

  const submitAddTransactionFormHandler = (event) => {
    event.preventDefault();
    const value =
      props.transactionType === "Income"
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

  const mappedTransactionCategories = props.transactionCategories.map(
    ({ value, icon }) => (
      <option key={value} value={value}>
        {value}
      </option>
    )
  );

  console.log(transactionCategory);

  return (
    <Modal onClose={props.onClose}>
      <form
        onSubmit={submitAddTransactionFormHandler}
        style={{ width: "100%" }}
      >
        <h1>Add {props.transactionType}</h1>
        <Input
          inputIcon={<BsFillCalculatorFill className="input-icon" />}
          value={transactionValue}
          onChange={changeTransactionValueHandler}
          type="number"
          placeholder="0.00"
        />

        <Select
          style={{ width: "100%" }}
          value={transactionCategory}
          onChange={changeTransactionCategoryHandler}
          options={mappedTransactionCategories}
        />

        <Input
          inputIcon={<BsJournalText className="input-icon" />}
          value={transactionDescription}
          onChange={changeTransactionDescriptionHandler}
          placeholder="Description"
        />

        <Input
          value={transactionDate}
          onChange={changeTransactionDateHandler}
          type="date"
        />

        <Button
          style={{
            float: "right",
            backgroundColor:
              props.transactionType === "Income"
                ? "var(--green)"
                : "var(--red)",
          }}
          type="submit"
          buttonText={`Add ${props.transactionType}`}
          buttonIcon={<BsFillPlusCircleFill className="button-icon" />}
        />
      </form>
    </Modal>
  );
};

export default AddTransaction;
