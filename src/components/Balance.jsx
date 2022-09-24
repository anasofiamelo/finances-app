import { useEffect, useReducer } from "react";
import { monthNames, lastYears } from "../utils";
import { Transaction } from ".";
import { useTransactions } from "../context/finances.context";

const Balance = () => {
  const { transactions } = useTransactions();

  useEffect(() => {
    dispatchSelectState({ type: "TRANSACTIONS_UPDATE" });
  }, [transactions]);

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

  const initialReducerState = {
    year: "All",
    month: "All",
    filteredTransactions: transactions,
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
    <>
      <Transaction
        balanceType="Balance"
        transactions={selectedValue.filteredTransactions}
      >
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
      </Transaction>

      {/* <div className="transactions-container">
        <Incomes />
        <Expenses />
      </div> */}
    </>
  );
};

export default Balance;
