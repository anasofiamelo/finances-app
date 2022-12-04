import React from "react";
import { expensesIcons, incomesIcons, formatValue } from "../../utils";
import moment from "moment";

const LatestActivityRow = (props) => {
  const { type, description, date, value } = props.transaction;
  const formattedDate = moment(date.toDate()).format("DD, MMMM");

  const isIncome = value > 0;
  const icon = isIncome ? incomesIcons[type] : expensesIcons[type];
  const formattedValue = formatValue(value);

  return (
    <div className="activity_row">
      <p className="activity-row_icon-item">{icon}</p>
      <p className="activity-row_description-item">{description}</p>
      <p className="activity-row_date-item">{formattedDate}</p>
      <p className="activity-row_value-item">{formattedValue}</p>
    </div>
  );
};

export default LatestActivityRow;
