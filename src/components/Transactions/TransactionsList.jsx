import { useState, useEffect } from "react";
import moment from "moment";
import { Table, ThWithSort } from "../../components";
import { incomesIcons, expensesIcons } from "../../utils";

const TransactionsList = (props) => {
  const { transactions } = props;

  const [sortedTransactions, setSortedTransactions] = useState(transactions);

  useEffect(() => {
    setSortedTransactions(transactions);
  }, [transactions]);

  const mappedTransactions = sortedTransactions.map((transaction) => {
    let { value, date, payment, description, type } = transaction;

    value = value.toFixed(2);

    const valueColor = value > 0 ? "var(--green)" : "var(--red)";
    const formattedDate = moment(date).format("DD/MM/YYYY");
    const isIncome = value > 0;

    return (
      <tr key={Math.random(1)}>
        <td>{isIncome ? incomesIcons[type] : expensesIcons[type]}</td>
        <td>{formattedDate}</td>
        <td>{description}</td>
        <td style={{ color: valueColor, fontWeight: 500 }}>$ {value}</td>
        <td>{payment}</td>
      </tr>
    );
  });

  const changeArrayHandler = (transactions) => {
    setSortedTransactions(transactions);
  };

  return (
    <Table
      thead={
        <>
          <th>Type</th>
          <ThWithSort
            sortedList={transactions}
            comparableKey="date"
            onToggle={changeArrayHandler}
          >
            Date
          </ThWithSort>
          <th>Description</th>
          <ThWithSort
            sortedList={transactions}
            comparableKey="value"
            onToggle={changeArrayHandler}
          >
            Value
          </ThWithSort>
          <th>Payment</th>
        </>
      }
    >
      {mappedTransactions}
    </Table>
  );
};

export default TransactionsList;
