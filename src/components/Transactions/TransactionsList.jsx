import { useState, useEffect } from "react";
import moment from "moment";
import { Table, ThWithSort } from "../../components";
import {
  incomesIcons,
  expensesIcons,
  formatValue,
  formatMomentDate,
} from "../../utils";
import useSort from "../../hooks/useSort";

const TransactionsList = (props) => {
  const { transactions } = props;

  const sortedTransac = useSort(transactions, "date");
  const [sortedTransactions, setSortedTransactions] = useState(sortedTransac);

  useEffect(() => {
    setSortedTransactions(sortedTransac);
  }, [sortedTransac]);

  const mappedTransactions = sortedTransactions.map((transaction, index) => {
    const { value, date, payment, description, type } = transaction;
    const transacValue = formatValue(value);
    const formattedDate = formatMomentDate(date);
    const icon = value > 0 ? incomesIcons[type] : expensesIcons[type];

    return (
      <tr key={index}>
        <td>{icon}</td>
        <td className="date-item">{formattedDate}</td>
        <td>{description}</td>
        <td>{transacValue}</td>
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
