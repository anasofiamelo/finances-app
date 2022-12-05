import { formatValue } from "../../utils";
import { Icon } from "@iconify/react";
import { Button } from "../../components";
import React from "react";

const BudgetTr = (props) => {
  const { budget } = props;
  const negativeMonthValue = budget.monthValue * -1;

  const monthValue = formatValue(negativeMonthValue);
  const yearValue = formatValue(negativeMonthValue * 12);

  return (
    <tr>
      <td>{budget.label}</td>
      <td>{monthValue}</td>
      <td>{yearValue}</td>
      <td className="actions-container">
        <Button className="edit-icon">
          <Icon icon="material-symbols:edit-outline-sharp" />
        </Button>
        <Button className="delete-icon">
          <Icon icon="ic:outline-delete-outline" />
        </Button>
      </td>
    </tr>
  );
};

export default BudgetTr;
