import moment from "moment";
const currentYear = moment().year();

const transactionTypes = (state, action, transactions) => {
  const monthTransactions = (month) =>
    transactions.filter(
      (transaction) => String(transaction.date.getMonth()) == month
    );

  const ACTION_TYPES = {
    TRANSACTIONS_UPDATE: (() => {
      return {
        ...state,
        filteredTransactions: monthTransactions(state.month),
      };
    })(),
    ADD_INCOMES: (() => {
      return {
        ...state,
        filteredTransactions: [
          ...transactions.filter((transaction) => {
            return (
              transaction.value > 0 &&
              transaction.date.getFullYear() === state.year &&
              transaction.date.getMonth() === state.month
            );
          }),
          ...state.filteredTransactions,
        ],
      };
    })(),
    ADD_EXPENSES: (() => {
      return {
        ...state,
        filteredTransactions: [
          ...state.filteredTransactions,
          ...transactions.filter((transaction) => {
            return (
              transaction.value < 0 &&
              transaction.date.getFullYear() === state.year &&
              transaction.date.getMonth() === state.month
            );
          }),
        ],
      };
    })(),
    REMOVE_INCOMES: (() => {
      return {
        ...state,
        filteredTransactions: state.filteredTransactions.filter(
          (transaction) => transaction.value < 0
        ),
      };
    })(),
    REMOVE_EXPENSES: (() => {
      return {
        ...state,
        filteredTransactions: state.filteredTransactions.filter(
          (transaction) => transaction.value > 0
        ),
      };
    })(),
    SHOW_CURRENTLY_MONTH_BALANCE: (() => {
      return {
        ...state,
        filteredTransactions: transactions.filter(
          (transaction) =>
            transaction.date.getMonth() === moment().month() &&
            transaction.date.getFullYear() === moment().year()
        ),
      };
    })(),
    CHOOSE_YEAR: (() => {
      if (action.year === "All") {
        return {
          ...state,
          year: currentYear.toString(),
          filteredTransactions: transactions.filter(
            (transaction) => transaction.date.getFullYear() === currentYear
          ),
        };
      }
      return {
        ...state,
        year: action.year,
        filteredTransactions: transactions.filter(
          (transaction) =>
            String(transaction.date.getFullYear()) === action.year
        ),
      };
    })(),
    CHOOSE_MONTH: (() => {
      return {
        ...state,
        month: action.month,
        filteredTransactions: monthTransactions(action.month),
      };
    })(),
    FILTER_DESCRIPTION: (() => {
      if (action.filterInput === "") {
        return {
          ...state,
          filteredTransactions: monthTransactions(state.month),
        };
      }

      return {
        ...state,
        filteredTransactions: transactions.filter((transaction) =>
          transaction.description
            .toLowerCase()
            .includes(action.filterInput?.toLowerCase())
        ),
      };
    })(),
  };

  return ACTION_TYPES[action.type];
};

export default transactionTypes;
