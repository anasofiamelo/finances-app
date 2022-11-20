import { useState, useEffect } from "react";
import { Table, ThWithSort, Button } from "../../components";
import {
  incomesIcons,
  expensesIcons,
  formatValue,
  formatMomentDate,
} from "../../utils";
import useSort from "../../hooks/useSort";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TransactionsList = (props) => {
  const { transactions } = props;

  const sortedTransac = useSort(transactions, "date");
  const [sortedTransactions, setSortedTransactions] = useState(sortedTransac);

  useEffect(() => {
    setSortedTransactions(sortedTransac);
  }, [sortedTransac]);

  const teste = (e) => {
    console.log(e.target.parentElement);
  };

  const actionButtons = (
    <>
      <div className="action-buttons-container">
        <Button onClick={teste}>
          <AiOutlineEdit className="action-icon" />
        </Button>
        <Button onClick={teste}>
          <AiOutlineDelete className="action-icon" />
        </Button>
      </div>
    </>
  );

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
        <td>yes!</td>
        <td>{actionButtons}</td>
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
          <th>Paid</th>
          <th>Actions</th>
        </>
      }
    >
      {mappedTransactions}
    </Table>
  );
};

export default TransactionsList;
