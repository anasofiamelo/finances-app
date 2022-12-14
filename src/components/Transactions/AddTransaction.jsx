import { useState } from "react";
import { InputLabel, AddContainer } from "../../components";
import { useTransactions } from "../../context/transactions.context";
import { BsFillCalculatorFill, BsJournalText } from "react-icons/bs";
import { expensesOptions } from "../../utils/Transactions/typeofExpenses";

import ReactSelect from "../ui/ReactSelect";

const AddTransaction = (props) => {
  const { addTransaction } = useTransactions();
  const { transactionType: type } = props;

  const [description, setDescription] = useState();
  const [category, setCategory] = useState(props.transactionCategories[0]);
  const [transactionValue, setValue] = useState();
  const [date, setDate] = useState();

  const changeTransactionValueHandler = (event) => setValue(event.target.value);

  const changeDescriptionHandler = (event) =>
    setDescription(event.target.value);

  const changeSelectedCategoryHandler = (item) => setCategory(item);

  const changeDateHandler = (event) => setDate(event.target.value);

  const submitAddTransactionFormHandler = (event) => {
    event.preventDefault();
    const value =
      type === "Income" ? Number(transactionValue) : Number(-transactionValue);

    const transaction = {
      type: category.value,
      payment: "Cash",
      value,
      description,
      date: new Date(date),
    };

    if (!transactionValue) return;

    addTransaction(transaction);
    props.onClose();
  };

  return (
    <AddContainer
      onClose={props.onClose}
      title={`New ${props.transactionType}`}
      submitButtonText={`Add ${props.transactionType}`}
      onSubmitAddForm={submitAddTransactionFormHandler}
    >
      <InputLabel
        label="Value"
        inputIcon={<BsFillCalculatorFill className="input-icon" />}
        value={transactionValue}
        onChange={changeTransactionValueHandler}
        type="number"
        placeholder="0.00"
      />

      <ReactSelect
        label="Category"
        onChange={changeSelectedCategoryHandler}
        options={expensesOptions}
      />

      <InputLabel
        label="Description"
        inputIcon={<BsJournalText className="input-icon" />}
        value={description}
        onChange={changeDescriptionHandler}
        placeholder={
          props.transactionType === "Expense" ? "Groceries" : "Salary of July"
        }
      />

      <InputLabel
        label="Date of transaction"
        value={date}
        onChange={changeDateHandler}
        type="date"
      />
    </AddContainer>
  );
};

export default AddTransaction;
