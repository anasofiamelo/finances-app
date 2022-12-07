import { useReducer, useCallback, useState } from "react";
import { Container, TransactionsTable, TransactionHeader } from "..";
import { formatValue } from "../../utils";
import transactionTypes from "../../hooks/transactionTypes";
import moment from "moment";
import { useTransactions } from "../../context/transactions.context";
import { useEffect } from "react";
import { useCreditCard } from "../../context/credit_card.context";

const Transactions = (props) => {
  const { getCardsTotalInvoices } = useCreditCard();
  const { userTransactions } = useTransactions();

  const [cardsInvoices, setCardsInvoices] = useState([]);
  console.log("cardsInvoices", cardsInvoices);
  console.log("cardsInvoices", cardsInvoices);
  const currentYear = moment().year();
  const currentMonth = moment().month();
  const initialManageBalancesState = {
    year: currentYear,
    month: currentMonth,
    filteredTransactions: userTransactions.filter(
      (transaction) =>
        transaction.date.year() === currentYear &&
        transaction.date.month() === currentMonth
    ),
  };

  const manageBalance = (state, action) => {
    return transactionTypes(state, action, userTransactions);
  };

  const [selectedBalance, dispatchSelectState] = useReducer(
    manageBalance,
    initialManageBalancesState
  );

  useEffect(() => {
    dispatchSelectState({ type: "TRANSACTIONS_UPDATE" });
  }, [userTransactions]);

  useEffect(() => {
    async function teste() {
      const invoices = await getCardsTotalInvoices({
        year: selectedBalance.year,
        month: selectedBalance.month + 1,
      });
      setCardsInvoices(invoices);
    }
    teste();
  }, [userTransactions]);

  const changeSelectedMonthHandler = useCallback((value) => {
    dispatchSelectState({ type: "CHOOSE_MONTH", month: value.month });
  }, []);

  const changeDescriptionFilterHandler = (value) => {
    dispatchSelectState({ type: "FILTER_DESCRIPTION", filterInput: value });
  };

  const totalBalance = selectedBalance.filteredTransactions.reduce(
    (prev, current) => prev + current.value,
    0
  );

  return (
    <Container>
      <TransactionHeader
        onChangeSelectedMonth={changeSelectedMonthHandler}
        onChangeDescriptionFilter={changeDescriptionFilterHandler}
        title={props.title}
      />

      <TransactionsTable
        transactions={[
          ...selectedBalance.filteredTransactions,
          ...cardsInvoices,
        ]}
      />

      <h3>Total {formatValue(totalBalance)}</h3>
    </Container>
  );
};

export default Transactions;
