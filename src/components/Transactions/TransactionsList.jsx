import { useState, useEffect } from "react";
import moment from "moment";
import { Table, ThWithSort } from "../../components";
import { incomesIcons, expensesIcons } from "../../utils";
import useSort from "../../hooks/useSort";

const TransactionsList = (props) => {
  const { transactions } = props;

  const sortedTransac = useSort(transactions, "date");
  const [sortedTransactions, setSortedTransactions] = useState(sortedTransac);

  useEffect(() => {
    setSortedTransactions(sortedTransac);
  }, [sortedTransac]);

  const mappedTransactions = sortedTransactions.map((transaction, index) => {
    let { value, date, payment, description, type } = transaction;

    value = value.toFixed(2);

    const isIncome = value > 0;
    const valueColor = isIncome ? "var(--green)" : "var(--red)";
    const formattedDate = moment(date).format("DD/MM/YYYY");
    const icon = isIncome ? incomesIcons[type] : expensesIcons[type];

    return (
      <tr key={index}>
        <td>{icon}</td>
        <td className="date-item">{formattedDate}</td>
        <td>{description}</td>
        <td
          style={{
            color: valueColor,
            fontWeight: 500,
          }}
        >
          $ {value}
        </td>
        <td>{payment}</td>
      </tr>
    );
  });

  const toggleSortedTransactionsHandler = (transactions) => {
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
            onToggle={toggleSortedTransactionsHandler}
          >
            Date
          </ThWithSort>
          <th>Description</th>
          <ThWithSort
            sortedList={transactions}
            comparableKey="value"
            onToggle={toggleSortedTransactionsHandler}
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
