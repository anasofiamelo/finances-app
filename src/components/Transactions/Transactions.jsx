import { useReducer, useEffect } from "react";
import { useTransactions } from "../../context/finances.context";
import { Container, TransactionsList, TransactionHeader } from "..";
import moment from "moment";
import transactionTypes from "../../hooks/transactionTypes";

const Transactions = (props) => {
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

  const changeSelectedMonthHandler = (value) => {
    dispatchSelectState({ type: "CHOOSE_MONTH", month: value });
  };

  const changeDescriptionFilterHandler = (value) => {
    dispatchSelectState({ type: "FILTER_DESCRIPTION", filterInput: value });
  };

  const totalBalanceTransactions = selectedBalance.filteredTransactions
    .reduce((prev, current) => prev + current.value, 0)
    .toFixed(2);

  useEffect(() => {
    return dispatchSelectState({ type: "TRANSACTIONS_UPDATE" });
  }, [transactions]);

  return (
    <Container style={{ minWidth: "500px" }}>
      <TransactionHeader
        onChangeSelectedMonth={changeSelectedMonthHandler}
        onChangeDescriptionFilter={changeDescriptionFilterHandler}
        title={props.title}
      />

      <div>
        <div className="balance-header"></div>
        <TransactionsList transactions={selectedBalance.filteredTransactions} />
      </div>

      <h3>
        Total{" "}
        <span
          style={{
            color: `${
              totalBalanceTransactions > 0 ? "var(--green)" : "var(--red)"
            }`,
          }}
        >
          $ {totalBalanceTransactions}
        </span>
      </h3>
    </Container>
  );
};

export default Transactions;
