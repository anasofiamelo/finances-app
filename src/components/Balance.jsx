import { Transaction } from "../components";
import { useTransactions } from "../context/finances.context";

const Balance = () => {
  const { transactions } = useTransactions();

  return (
    <Transaction
      balanceType="Your recent activities"
      transactions={transactions}
      balanceThead={["Category", "Description", "Value", "Date"]}
    />
  );
};

export default Balance;
