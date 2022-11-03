import {
  Reports,
  TransactionValueCards,
  // Transactions,
  LatestActivities,
} from "../components";
import { useTransactions } from "../context/finances.context";

const Dashboard = () => {
  const { transactions } = useTransactions();

  return (
    <div>
      <div className="balance_grid">
        <LatestActivities />
        {/* <Transactions title="Your recent activities" /> */}
        <div className="transaction_cards">
          <TransactionValueCards />
        </div>
      </div>
      <Reports transactions={transactions} />
    </div>
  );
};

export default Dashboard;
