import { useState, useReducer, useEffect } from "react";
import { monthOptions, yearOptions } from "../../utils";
import { useTransactions } from "../../context/finances.context";
import { Table, Select, Input } from "../";
import moment from "moment";
import TransactionHeader from "./TransactionHeader";
import transactionTypes from "../../hooks/transactionTypes";

const Transaction = (props) => {
  const context = useTransactions();

  const transactions = !!props.transactions
    ? props.transactions
    : context.transactions;

  const currentYear = moment().year();
  const currentMonth = moment().month();

  const initialManageBalancesState = {
    year: currentYear,
    month: currentMonth,
    filteredTransactions: transactions.filter(
      (transaction) =>
        transaction.date.getFullYear() === currentYear &&
        transaction.date.getMonth() === currentMonth
    ),
  };

  const manageBalances = (state, action) => {
    return transactionTypes(state, action, transactions);
  };

  const [selectedBalance, dispatchSelectState] = useReducer(
    manageBalances,
    initialManageBalancesState
  );

  const [showTable, setShowTable] = useState(true);
  const [showPreviousBalance, setShowPreviousBalance] = useState(false);
  const [showIncomes, setShowIncomes] = useState(true);
  const [showExpenses, setShowExpenses] = useState(true);

  const yearValueChangeHandler = (event) => {
    const inputValue = event.target.value;
    dispatchSelectState({ type: "CHOOSE_YEAR", year: inputValue });
  };
  const monthValueChangeHandler = (event) => {
    const inputValue = event.target.value;
    dispatchSelectState({ type: "CHOOSE_MONTH", month: inputValue });
  };
  const showBalanceTableHandler = () => {
    setShowTable((prev) => !prev);
  };
  const showPreviousBalanceHandler = () => {
    setShowPreviousBalance((prev) => !prev);
  };
  const showIncomesHandler = () => {
    setShowIncomes((prev) => !prev);
  };
  const showExpensesHandler = () => {
    setShowExpenses((prev) => !prev);
  };

  const showMonthSelect = selectedBalance.year !== "All";
  const formattedThead = props.balanceThead.map((td) => <td>{td}</td>);
  const totalBalanceTransactions = selectedBalance.filteredTransactions
    .reduce((prev, current) => prev + current.value, 0)
    .toFixed(2);

  useEffect(() => {
    if (!showIncomes) {
      dispatchSelectState({ type: "REMOVE_INCOMES" });
    } else {
      dispatchSelectState({ type: "ADD_INCOMES" });
    }
  }, [showIncomes]);
  useEffect(() => {
    if (!showExpenses) {
      dispatchSelectState({ type: "REMOVE_EXPENSES" });
    } else {
      dispatchSelectState({ type: "ADD_EXPENSES" });
    }
  }, [showExpenses]);
  useEffect(() => {
    return dispatchSelectState({ type: "TRANSACTIONS_UPDATE" });
  }, [transactions]);

  const formattedBalance = selectedBalance.filteredTransactions.map(
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

  return (
    <div style={{ minWidth: "500px" }}>
      <TransactionHeader
        showTable={showTable}
        onShowBalanceTable={showBalanceTableHandler}
        title={props.balanceType}
      />

      {showTable && (
        <div>
          <div className="balance-header">
            <Input
              onChange={showPreviousBalanceHandler}
              checked={showPreviousBalance}
              type="checkbox"
              label="Show balance from previous months "
            />

            <div className="row">
              <Input
                onChange={showIncomesHandler}
                checked={showIncomes}
                type="checkbox"
                label="Incomes"
                style={{ marginRight: "1rem" }}
              />
              <Input
                onChange={showExpensesHandler}
                checked={showExpenses}
                type="checkbox"
                label="Expenses"
              />
            </div>
          </div>
          {showPreviousBalance && (
            <Select
              value={selectedBalance.current}
              onChange={yearValueChangeHandler}
              options={yearOptions}
            />
          )}

          {showMonthSelect && showPreviousBalance && (
            <Select
              value={selectedBalance.which}
              onChange={monthValueChangeHandler}
              options={monthOptions}
              style={{ marginLeft: "2rem" }}
            />
          )}
          <Table thead={formattedThead}>{formattedBalance}</Table>
        </div>
      )}

      <h2>Total $ {totalBalanceTransactions}</h2>
    </div>
  );
};

export default Transaction;
