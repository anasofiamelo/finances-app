import { Reports, TransactionValueCards, Transactions } from "../components";
import { useTransactions } from "../context/finances.context";

const Dashboard = () => {
  const { transactions } = useTransactions();

  return (
    <div>
      <div className="balance_grid">
        <Transactions title="Your recent activities" />
        <div className="transaction_cards">
          <TransactionValueCards />
        </div>
      </div>
      <Reports transactions={transactions} />
    </div>
  );
};

export default Dashboard;
