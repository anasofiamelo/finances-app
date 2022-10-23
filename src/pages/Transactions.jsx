import { Transaction } from "../components";
import { useTransactions } from "../context/finances.context";

const Transactions = (props) => {
  const { transactions } = useTransactions();
  return (
    <div>
      <Transaction
        balanceType="Your recent activities"
        transactions={transactions}
        balanceThead={["Category", "Description", "Value", "Date"]}
      />
    </div>
  );
};

export default Transactions;
