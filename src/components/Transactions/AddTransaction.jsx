import { useState } from "react";
import { InputLabel, Select, AddContainer } from "../../components";
import { useTransactions } from "../../context/finances.context";
import { BsFillCalculatorFill, BsJournalText } from "react-icons/bs";
import moment from "moment";

const AddTransaction = (props) => {
  const { addTransactionHandler } = useTransactions();

  const [transactionDescription, setTransactionDescription] = useState();
  const [transactionCategory, setTransactionCategory] = useState(
    props.transactionCategories[0]
  );
  const [transactionValue, setTransactionValue] = useState();
  const [transactionDate, setTransactionDate] = useState();
  console.log("transactionDate", transactionDate);
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
      date: moment(transactionDate),
    };

    if (!transactionValue) return;

    addTransactionHandler(transaction);
    props.onClose();
  };

  const mappedTransactionCategories = props.transactionCategories.map(
    (value) => (
      <option key={value} value={value}>
        {value}
      </option>
    )
  );

  return (
    <AddContainer
      onClose={props.onClose}
      onSubmitAddForm={submitAddTransactionFormHandler}
      title={`New ${props.transactionType}`}
    >
      <InputLabel
        label="Value"
        inputIcon={<BsFillCalculatorFill className="input-icon" />}
        value={transactionValue}
        onChange={changeTransactionValueHandler}
        type="number"
        placeholder="0.00"
      />

      <Select
        label="Category"
        style={{ width: "100%" }}
        value={transactionCategory}
        onChange={changeTransactionCategoryHandler}
        options={mappedTransactionCategories}
      />

      <InputLabel
        label="Description"
        inputIcon={<BsJournalText className="input-icon" />}
        value={transactionDescription}
        onChange={changeTransactionDescriptionHandler}
        placeholder={
          props.transactionType === "Expense" ? "Groceries" : "Salary of July"
        }
      />

      <InputLabel
        label="Date of transaction"
        value={transactionDate}
        onChange={changeTransactionDateHandler}
        type="date"
      />
    </AddContainer>
  );
};

export default AddTransaction;
