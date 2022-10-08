import { useState, useReducer, useEffect } from "react";
import { useTransactions } from "../../context/finances.context";
import { Table, Input, Container } from "../../components";
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

  const manageBalance = (state, action) => {
    return transactionTypes(state, action, transactions);
  };

  const [selectedBalance, dispatchSelectState] = useReducer(
    manageBalance,
    initialManageBalancesState
  );

  const [showIncomes, setShowIncomes] = useState(true);
  const [showExpenses, setShowExpenses] = useState(true);

  const showIncomesHandler = () => {
    setShowIncomes((prev) => !prev);
  };
  const showExpensesHandler = () => {
    setShowExpenses((prev) => !prev);
  };
  const changeSelectedMonthHandler = (value) => {
    dispatchSelectState({ type: "CHOOSE_MONTH", month: value });
  };

  const formattedThead = props.balanceThead.map((th) => <th>{th}</th>);
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
    <Container style={{ minWidth: "500px" }}>
      <TransactionHeader
        onChangeSelectedMonth={changeSelectedMonthHandler}
        title={props.balanceType}
      />

      <div>
        <div className="balance-header">
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

        <Table thead={formattedThead}>{formattedBalance}</Table>
      </div>
      <h2>Total $ {totalBalanceTransactions}</h2>
    </Container>
  );
};

export default Transaction;
