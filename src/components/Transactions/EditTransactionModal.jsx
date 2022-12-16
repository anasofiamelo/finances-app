import React from "react";
import { useState } from "react";
import ReactSelect from "../ui/ReactSelect";
import { ButtonWithIcon, InputLabel, Modal } from "../../components";
import { useTransactions } from "../../context/transactions.context";
import { expensesOptions } from "../../utils/Transactions/typeofExpenses";

const EditTransactionModal = (props) => {
  const { updateTransaction } = useTransactions();
  const { transaction } = props;
  const { transacId, description } = transaction;

  const [editedTransaction, setEditedTransaction] = useState(transaction);
  console.log("editedTransaction", editedTransaction);
  const changeDescriptionHandler = (event) =>
    setEditedTransaction((prev) => ({
      ...prev,
      description: event.target.value,
    }));

  const changeValueHandler = (event) =>
    setEditedTransaction((prev) => ({
      ...prev,
      value: Number(event.target.value),
    }));

  const changeCategoryHandler = (item) => {
    setEditedTransaction((prev) => ({
      ...prev,
      type: item.value,
    }));
  };

  const editTransactionHandler = (event) => {
    event.preventDefault();
    updateTransaction(transacId, editedTransaction);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={editTransactionHandler}>
        <h2 className="modal_title">Edit {description}</h2>

        <InputLabel
          onChange={changeDescriptionHandler}
          label="Description"
          value={editedTransaction.description}
        />
        <InputLabel
          onChange={changeValueHandler}
          label="Value"
          value={editedTransaction.value}
          type="number"
        />

        <ReactSelect
          onChange={changeCategoryHandler}
          label="Category"
          options={expensesOptions}
        />

        <ButtonWithIcon type="submit">Edit transaction</ButtonWithIcon>
      </form>
    </Modal>
  );
};

export default EditTransactionModal;
