import { useState, useReducer, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { monthNames, lastYears } from "../../utils";
import { useTransactions } from "../../context/finances.context";
import moment from "moment";

const Transaction = (props) => {
  const context = useTransactions();
  const transactions = !!props.transactions
    ? props.transactions
    : context.transactions;

  const [showTable, setShowTable] = useState(true);

  const initialReducerState = {
    year: "All",
    month: "All",
    filteredTransactions: transactions,
  };

  const selectStateManagement = (state, action) => {
    if (action.type === "TRANSACTIONS_UPDATE") {
      return { ...state, filteredTransactions: transactions };
    }

    if (action.type === "CURRENT_YEAR") {
      if (action.year === "All") {
        return { ...state, year: "All", filteredTransactions: transactions };
      }
      return {
        ...state,
        year: action.year,
        filteredTransactions: transactions.filter(
          (transaction) =>
            String(transaction.date.getFullYear()) === action.year
        ),
      };
    }

    if (action.type === "CURRENT_MONTH") {
      if (action.month === "All") {
        return {
          ...state,
          filteredTransactions: transactions.filter(
            (transaction) =>
              String(transaction.date.getFullYear()) === state.year
          ),
        };
      }
      return {
        ...state,
        month: action.month,
        filteredTransactions: transactions.filter(
          (transaction) =>
            String(transaction.date.getMonth()) === action.month &&
            String(transaction.date.getFullYear()) === state.year
        ),
      };
    }
  };

  const [selectedValue, dispatchSelectState] = useReducer(
    selectStateManagement,
    initialReducerState
  );

  console.log(selectedValue);

  const yearValueChangeHandler = (event) => {
    const inputValue = event.target.value;
    dispatchSelectState({ type: "CURRENT_YEAR", year: inputValue });
  };

  const monthValueChangeHandler = (event) => {
    const inputValue = event.target.value;
    dispatchSelectState({ type: "CURRENT_MONTH", month: inputValue });
  };

  useEffect(() => {
    dispatchSelectState({ type: "TRANSACTIONS_UPDATE" });
  }, [transactions]);

  const showBalanceTableHandler = () => {
    setShowTable((prev) => !prev);
  };

  const totalBalanceTransactions = props.transactions.reduce(
    (prev, current) => prev + current.value,
    0
  );

  const formattedBalance = selectedValue.filteredTransactions.map(
    ({ type, value, date, description }) => (
      <tr key={value}>
        <td>{type}</td>
        <td>{description}</td>
        <td style={{ color: `${value > 0 ? "var(--green)" : "var(--red)"}` }}>
          ${value.toFixed(2)}
        </td>
        <td>{moment(date).format("MMMM, DD, YYYY")}</td>
      </tr>
    )
  );

  const monthOptions = monthNames.map((month, index) => (
    <option key={month} value={index}>
      {month}
    </option>
  ));

  const yearOptions = lastYears.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
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

      <select
        style={{ marginBottom: "1rem" }}
        value={selectedValue.current}
        onChange={yearValueChangeHandler}
      >
        <option value="All">All years</option>
        {yearOptions}
      </select>

      {selectedValue.year !== "All" && (
        <select
          onChange={monthValueChangeHandler}
          value={selectedValue.which}
          style={{ marginLeft: "2rem" }}
        >
          <option value="All">All months</option>
          {monthOptions}
        </select>
      )}

      {showTable && (
        <table>
          <thead>
            <tr>
              {props.customTr.map((tr) => (
                <td>{tr}</td>
              ))}
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
