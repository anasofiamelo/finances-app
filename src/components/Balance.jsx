import { Transaction } from ".";
import { useTransactions } from "../context/finances.context";

const Balance = () => {
  const { transactions } = useTransactions();

  return (
    <Transaction
      balanceType="Balance"
      transactions={transactions}
      customTr={["Type", "Description", "Value", "Date"]}
    />
  );
};

export default Balance;
