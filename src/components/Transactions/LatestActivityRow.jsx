import React from "react";
import { expensesIcons, incomesIcons, formatValue } from "../../utils";
const LatestActivityRow = (props) => {
  const { type, description, date, value } = props.transaction;

  const isIncome = value > 0;
  const icon = isIncome ? incomesIcons[type] : expensesIcons[type];
  const formattedValue = formatValue(value);

  return (
    <div className="activity_row">
      <p className="activity-row_icon-item">{icon}</p>
      <p className="activity-row_description-item">{description}</p>
      <p className="activity-row_date-item">{date}</p>
      {/* <p className="activity-row_date-item">{date.format("DD, MMMM")}</p> */}
      <p className="activity-row_value-item">{formattedValue}</p>
    </div>
  );
};

export default LatestActivityRow;
