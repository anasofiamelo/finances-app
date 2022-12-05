import { useState, useEffect } from "react";
import { Table, ThWithSort } from "..";
import useSort from "../../hooks/useSort";
import TransactionTr from "./TransactionTr";

const TransactionsTable = (props) => {
  const { transactions } = props;

  const sortedTransac = useSort(transactions, "date");
  const [sortedTransactions, setSortedTransactions] = useState(sortedTransac);

  useEffect(() => {
    setSortedTransactions(sortedTransac);
  }, [sortedTransac]);

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
          <th>Paid</th>
          <th>Actions</th>
        </>
      }
    >
      {sortedTransactions.map((transaction) => (
        <TransactionTr transaction={transaction} />
      ))}
    </Table>
  );
};

export default TransactionsTable;
