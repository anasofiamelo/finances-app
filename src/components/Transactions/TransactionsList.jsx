import { useState } from "react";
import moment from "moment";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { Table } from "../../components";
import { incomesIcons, expensesIcons } from "../../utils";
import { useEffect } from "react";

const TransactionsList = (props) => {
  const { transactions } = props;

  const [showDecrescentDate, setShowDecrescentDate] = useState(false);
  const [showDecrescentValue, setShowDecrescentValue] = useState(false);
  const [sortedTransactions, setSortedTransactions] = useState(transactions);

  const toggleDecrescentDateHandler = () =>
    setShowDecrescentDate((prev) => !prev);

  const toggleDecrescentValueHandler = () =>
    setShowDecrescentValue((prev) => !prev);

  useEffect(() => {
    const sortCrescentDate = () =>
      transactions.sort((a, b) => a.date.getTime() - b.date.getTime());

    const sortDecrescentDate = () =>
      transactions.sort((a, b) => b.date.getTime() - a.date.getTime());

    setSortedTransactions(
      showDecrescentDate ? sortDecrescentDate() : sortCrescentDate()
    );
  }, [showDecrescentDate, transactions]);

  useEffect(() => {
    const sortCrescentValue = () =>
      transactions.sort((a, b) => a.value - b.value);

    const sortDecrescentValue = () =>
      transactions.sort((a, b) => b.value - a.value);

    setSortedTransactions(
      showDecrescentValue ? sortDecrescentValue() : sortCrescentValue()
    );
  }, [showDecrescentValue, transactions]);

  const mappedTransactions = sortedTransactions.map((transaction) => {
    let { value, date, payment, description, type } = transaction;

    value = value.toFixed(2);

    const valueColor = value > 0 ? "var(--green)" : "var(--red)";
    const formattedDate = moment(date).format("DD/MM/YYYY");
    const isIncome = value > 0;

    return (
      <tr>
        <td>{isIncome ? incomesIcons[type] : expensesIcons[type]}</td>
        <td>{formattedDate}</td>
        <td>{description}</td>
        <td style={{ color: valueColor, fontWeight: 500 }}>$ {value}</td>
        <td>{payment}</td>
      </tr>
    );
  });

  return (
    <Table
      thead={
        <>
          <th>Type</th>
          <th
            onClick={toggleDecrescentDateHandler}
            className="space-between row"
            style={{ cursor: "pointer" }}
          >
            Date
            {showDecrescentDate ? (
              <BsFillCaretDownFill />
            ) : (
              <BsFillCaretUpFill />
            )}
          </th>
          <th>Description</th>
          <th
            onClick={toggleDecrescentValueHandler}
            className="space-between row"
            style={{ cursor: "pointer" }}
          >
            Value
            {showDecrescentValue ? (
              <BsFillCaretUpFill />
            ) : (
              <BsFillCaretDownFill />
            )}
          </th>
          <th>Payment</th>
        </>
      }
    >
      {mappedTransactions}
    </Table>
  );
};

export default TransactionsList;
