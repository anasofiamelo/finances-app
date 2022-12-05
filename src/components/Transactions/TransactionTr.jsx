import React from "react";
import {
  formatValue,
  formatMomentDate,
  incomesIcons,
  expensesIcons,
} from "../../utils";
import { Icon } from "@iconify/react";

const TransactionTr = (props) => {
  const { value, date, payment, description, type } = props.transaction;
  const transacValue = formatValue(value);
  const formattedDate = formatMomentDate(date);
  const icon = value > 0 ? incomesIcons[type] : expensesIcons[type];

  const teste = (e) => {
    console.log(e.target.parentElement);
  };

  const actionButtons = (
    <>
      <div className="action-buttons-container">
        <button onClick={teste}>
          <Icon icon="material-symbols:edit" className="action-icon" />
        </button>
        <button onClick={teste}>
          <Icon icon="ic:round-delete" className="action-icon" />
        </button>
      </div>
    </>
  );

  return (
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
  );
};

export default TransactionTr;
