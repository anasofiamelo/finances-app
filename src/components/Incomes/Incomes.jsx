import Transaction from "../Transaction";
import { useTransactions } from "../../context/finances.context";

const Incomes = () => {
  const { transactions } = useTransactions();
  const incomes = transactions.filter((finance) => finance.value > 0);
  return (
    <>
      <Transaction transactions={incomes} balanceType="Incomes" />
    </>
  );
};

export default Incomes;
