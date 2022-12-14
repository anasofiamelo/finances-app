import React from "react";
import { ButtonWithIcon, Modal } from "../../components";
import { Icon } from "@iconify/react";
import { useTransactions } from "../../context/transactions.context";

const DeleteTransactionModal = (props) => {
  const { deleteTransaction } = useTransactions();

  const deleteTransactionHandler = () => {
    deleteTransaction(props.transactionId);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <h2 className="modal_title">Delete Transaction</h2>
      <p style={{ fontSize: "1.4rem" }}>
        Delete transaction {props.transactionDescription} permanently?
      </p>
      <div className="row space-between">
        <ButtonWithIcon
          onClick={props.onClose}
          iconPosition="left"
          buttonIcon={<Icon icon="ic:outline-cancel-presentation" />}
          className="modal_action-button"
          style={{ backgroundColor: "var(--grey)" }}
        >
          Cancel
        </ButtonWithIcon>
        <ButtonWithIcon
          onClick={deleteTransactionHandler}
          buttonIcon={<Icon icon="ic:outline-delete-outline" />}
          className="modal_action-button"
        >
          Delete
        </ButtonWithIcon>
      </div>
    </Modal>
  );
};

export default DeleteTransactionModal;
