import React, { useState } from "react";
import {
  formatValue,
  formatMomentDate,
  incomesIcons,
  expensesIcons,
} from "../../utils";
import { Icon } from "@iconify/react";
import { Button } from "../";
import DeleteTransactionModal from "./DeleteTransactionModal";

const TransactionTr = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { transaction } = props;
  const { value, date, payment, description, type } = transaction;

  const transacValue = formatValue(value);
  const formattedDate = formatMomentDate(date);
  const icon = value > 0 ? incomesIcons[type] : expensesIcons[type];

  const showDeleteModalHandler = () => setShowDeleteModal(true);
  const closeDeleteModalHandler = () => setShowDeleteModal(false);

  const actionButtons = (
    <>
      <div className="action-buttons-container">
        <Button>
          <Icon icon="material-symbols:edit" className="action-icon" />
        </Button>
        <Button onClick={showDeleteModalHandler}>
          <Icon icon="ic:round-delete" className="action-icon" />
        </Button>
      </div>
    </>
  );

  return (
    <>
      <tr>
        <td>{icon}</td>
        <td className="date-item">{formattedDate}</td>
        <td>{description}</td>
        <td>{transacValue}</td>
        <td>{payment}</td>
        <td>
          <input type="checkbox" />
        </td>
        <td>{actionButtons}</td>
      </tr>
      {showDeleteModal && (
        <DeleteTransactionModal
          onClose={closeDeleteModalHandler}
          transactionId={transaction.transacId}
          transactionDescription={transaction.description}
        />
      )}
    </>
  );
};

export default TransactionTr;
