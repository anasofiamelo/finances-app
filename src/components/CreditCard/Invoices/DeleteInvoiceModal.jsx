import React from "react";
import { ButtonWithIcon, Modal } from "../../../components";
import { Icon } from "@iconify/react";
import { useCreditCard } from "../../../context/credit_card.context";

const DeleteInvoiceModal = (props) => {
  const { deleteInvoice } = useCreditCard();

  const deleteInvoiceHandler = () => {
    deleteInvoice(props.invoice.cardId, props.invoice.invoiceId);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <h2 className="modal_title">Delete Invoice</h2>
      <p style={{ fontSize: "1.4rem" }}>
        Delete invoice {props.invoice.item} permanently?
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
          onClick={deleteInvoiceHandler}
          buttonIcon={<Icon icon="ic:outline-delete-outline" />}
          className="modal_action-button"
        >
          Delete
        </ButtonWithIcon>
      </div>
    </Modal>
  );
};

export default DeleteInvoiceModal;
