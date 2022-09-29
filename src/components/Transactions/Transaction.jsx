import { useState, useReducer, useEffect } from "react";
import { monthOptions, yearOptions } from "../../utils";
import { useTransactions } from "../../context/finances.context";
import { Table, Select } from "../";
import moment from "moment";
import TransactionHeader from "./TransactionHeader";

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

  const totalBalanceTransactions = selectedValue.filteredTransactions
    .reduce((prev, current) => prev + current.value, 0)
    .toFixed(2);

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

  const showMonthSelect = selectedValue.year !== "All";

  const formattedThead = props.balanceThead.map((td) => <td>{td}</td>);

  return (
    <div style={{ minWidth: "500px" }}>
      <TransactionHeader
        showTable={showTable}
        onShowBalanceTable={showBalanceTableHandler}
        title={props.balanceType}
      />

      <Select
        value={selectedValue.current}
        onChange={yearValueChangeHandler}
        options={yearOptions}
      />

      {showMonthSelect && (
        <Select
          value={selectedValue.which}
          onChange={monthValueChangeHandler}
          options={monthOptions}
          style={{ marginLeft: "2rem" }}
        />
      )}

      {showTable && <Table thead={formattedThead}>{formattedBalance}</Table>}

      <h2>Total $ {totalBalanceTransactions}</h2>
    </div>
  );
};

export default Transaction;
