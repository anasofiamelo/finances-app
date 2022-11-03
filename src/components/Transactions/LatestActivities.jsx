import React from "react";
import { Container } from "../../components";
import { useTransactions } from "../../context/finances.context";
import { expensesIcons, incomesIcons } from "../../utils";
import { NavLink } from "react-router-dom";

const LatestActivities = () => {
  const { transactions } = useTransactions();
  const latestTransactions = transactions.slice(0, 5);

  const mappedTransactions = latestTransactions.map((transaction) => {
    const { type, description, date, value } = transaction;
    const isIncome = value > 0;

    const icon = isIncome ? incomesIcons[type] : expensesIcons[type];
    const valueColor = isIncome ? "var(--green)" : "var(--red)";
    const formattedValue = isIncome ? value : value * -1;
    const valueSign = isIncome ? "+" : "-";
    return (
      <div className="activity_row">
        <p className="activity-row_icon-item">{icon}</p>
        <p>{description}</p>
        <p className="activity-row_date-item">{date.format("DD, MMMM")}</p>
        <p
          className="activity-row_value-item"
          style={{
            color: valueColor,
          }}
        >
          {valueSign} ${formattedValue}
        </p>
      </div>
    );
  });

  return (
    <Container>
      <h2 className="title">Latest activities</h2>
      {mappedTransactions}
      <NavLink to="/transactions" className="latest-activities_all-button">
        {" "}
        View all
      </NavLink>
    </Container>
  );
};

export default LatestActivities;
