import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { monthNames } from "../utils/";

const Transaction = (props) => {
  const [showTable, setShowTable] = useState(false);

  const formattedDate = (date) =>
    `${monthNames[date.getMonth()]}, ${date.getFullYear()}`;

  const showBalanceTableHandler = () => {
    setShowTable((prev) => !prev);
  };

  const totalBalanceTransactions = props.transactions.reduce(
    (prev, current) => prev + current.value,
    0
  );

  const formattedBalance = props.transactions.map(({ type, value, date }) => (
    <tr>
      <td>{type}</td>
      <td style={{ color: `${value > 0 ? "green" : "red"}` }}>
        $ {value.toFixed(2)}
      </td>
      <td>{formattedDate(date)}</td>
    </tr>
  ));

  return (
    <div style={{ minWidth: "500px" }}>
      <div className="balance-header">
        <h1>{props.balanceType}</h1>
        <button onClick={showBalanceTableHandler}>
          {showTable ? (
            <FiChevronUp style={{ fontSize: "2.5rem" }} />
          ) : (
            <FiChevronDown style={{ fontSize: "2.5rem" }} />
          )}
        </button>
      </div>
      {showTable && props.children}
      {showTable && (
        <table>
          <thead>
            <tr>
              <td>Type</td>
              <td>Value</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>{formattedBalance}</tbody>
        </table>
      )}
      <h2>Total $ {totalBalanceTransactions.toFixed(2)}</h2>
    </div>
  );
};

export default Transaction;