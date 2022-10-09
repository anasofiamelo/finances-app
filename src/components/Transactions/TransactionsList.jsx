import moment from "moment";
import { Table } from "../../components";
import { incomesIcons, expensesIcons } from "../../utils";

const TransactionsList = (props) => {
  const mappedTransactions = props.transactions.map((transaction) => {
    const { value, date, payment, description, type } = transaction;
    const valueColor = value > 0 ? "var(--green)" : "var(--red)";
    return (
      <tr
        style={{
          borderBottom: "1px solid var(--light-grey)",
        }}
      >
        <td>{value > 0 ? incomesIcons[type] : expensesIcons[type]}</td>
        <td>{moment(date).format("DD/MM/YYYY")}</td>
        <td>{description}</td>
        <td style={{ color: valueColor, fontWeight: 500 }}>
          $ {value.toFixed(2)}
        </td>
        <td>{payment}</td>
      </tr>
    );
  });

  return (
    <Table
      thead={
        <>
          <th>Type</th>
          <th>Date</th>
          <th>Description</th>
          <th>Value</th>
          <th>Payment</th>
        </>
      }
    >
      {mappedTransactions}
    </Table>
  );
};

export default TransactionsList;
