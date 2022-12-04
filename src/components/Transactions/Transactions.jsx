import { useReducer, useCallback } from "react";
import { Container, TransactionsList, TransactionHeader } from "..";
import transactionTypes from "../../hooks/transactionTypes";
import moment from "moment";

const Transactions = (props) => {
  // const transactions = props.transactions.map((transaction) => {
  //   const parsedDate = moment(transaction.date.toDate());
  //   return { ...transaction, date: parsedDate };
  // });
  const transactions = props.transactions.map((transaction) => ({
    ...transaction,
    date: moment(transaction.date.toDate()),
  }));

  const currentYear = moment().year();
  const currentMonth = moment().month();
  const initialManageBalancesState = {
    year: currentYear,
    month: currentMonth,
    filteredTransactions: transactions.filter(
      (transaction) =>
        transaction.date.year() === currentYear &&
        transaction.date.month() === currentMonth
    ),
  };

  const manageBalance = (state, action) => {
    return transactionTypes(state, action, transactions);
  };

  const [selectedBalance, dispatchSelectState] = useReducer(
    manageBalance,
    initialManageBalancesState
  );

  const changeSelectedMonthHandler = useCallback((value) => {
    dispatchSelectState({ type: "CHOOSE_MONTH", month: value.month });
  }, []);

  const changeDescriptionFilterHandler = (value) => {
    dispatchSelectState({ type: "FILTER_DESCRIPTION", filterInput: value });
  };

  // useEffect(() => {
  // return dispatchSelectState({ type: "TRANSACTIONS_UPDATE" });
  // }, [transactions]);

  const totalBalanceTransactions = selectedBalance.filteredTransactions
    .reduce((prev, current) => prev + current.value, 0)
    .toFixed(2);

  return (
    <Container>
      <TransactionHeader
        onChangeSelectedMonth={changeSelectedMonthHandler}
        onChangeDescriptionFilter={changeDescriptionFilterHandler}
        title={props.title}
      />

      <TransactionsList transactions={selectedBalance.filteredTransactions} />

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
