import Transaction from "../Transaction";
import { useTransactions } from "../../context/finances.context";

const Expenses = (props) => {
  const { transactions } = useTransactions();
  const expenses = transactions.filter((finance) => finance.value < 0);
  return (
    <>
      <Transaction transactions={expenses} balanceType="Expenses" />
    </>
  );
};

export default Expenses;
