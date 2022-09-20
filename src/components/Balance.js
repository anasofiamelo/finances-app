import { useReducer } from "react";
import { finances, monthNames, lastYears } from "../utils/";
import { Transaction, Incomes, Expenses } from "../components";

const selectStateManagement = (state, action) => {
  if (action.type === "CURRENT_YEAR") {
    if (action.year === "All") {
      return { ...state, year: "All", filteredFinances: finances };
    }
    return {
      ...state,
      year: action.year,
      filteredFinances: finances.filter(
        (finance) => String(finance.date.getFullYear()) === action.year
      ),
    };
  }

  if (action.type === "CURRENT_MONTH") {
    if (action.month === "All") {
      return {
        ...state,
        filteredFinances: finances.filter(
          (finance) => String(finance.date.getFullYear()) === state.year
        ),
      };
    }
    return {
      ...state,
      month: action.month,
      filteredFinances: finances.filter(
        (finance) =>
          String(finance.date.getMonth()) === action.month &&
          String(finance.date.getFullYear()) === state.year
      ),
    };
  }
};

const initialReducerState = {
  year: "All",
  month: "All",
  filteredFinances: finances,
};

const Balance = () => {
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
    <option value={index}>{month}</option>
  ));

  const yearOptions = lastYears.map((year) => (
    <option value={year}>{year}</option>
  ));

  return (
    <div className="container">
      <Transaction
        balanceType="Balance"
        transactions={selectedValue.filteredFinances}
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

      <div className="transactions-container">
        <Incomes />
        <Expenses />
      </div>
    </div>
  );
};

export default Balance;
