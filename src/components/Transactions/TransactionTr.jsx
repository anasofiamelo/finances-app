import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "../";
import {
  formatValue,
  formatMomentDate,
  incomesIcons,
  expensesOptionsIcons,
} from "../../utils";
import DeleteTransactionModal from "./DeleteTransactionModal";
import EditTransactionModal from "./EditTransactionModal";

const TransactionTr = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { transaction } = props;
  const { value, date, payment, description, type } = transaction;

  const transacValue = formatValue(value);
  const formattedDate = formatMomentDate(date);

  const icon =
    value > 0 ? (
      incomesIcons[type]
    ) : (
      <Icon
        className="transaction_type-icon"
        icon={expensesOptionsIcons[type]}
      />
    );

  const showDeleteModalHandler = () => setShowDeleteModal(true);
  const closeDeleteModalHandler = () => setShowDeleteModal(false);

  const showEditModalHandler = () => setShowEditModal(true);
  const closeEditModalHandler = () => setShowEditModal(false);

  const actionButtons = (
    <>
      <div className="action-buttons-container">
        <Button onClick={showEditModalHandler}>
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
      {showEditModal && (
        <EditTransactionModal
          onClose={closeEditModalHandler}
          transaction={transaction}
        />
      )}
    </>
  );
};

export default TransactionTr;
