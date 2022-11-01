import { Reports, TransactionValueCard, Transactions } from "../components";
import { useTransactions } from "../context/finances.context";
import { BsReception3, BsGraphDown, BsGraphUp } from "react-icons/bs";

const Dashboard = () => {
  const { transactions, totalBalance, totalIncomes, totalExpenses } =
    useTransactions();

  const customStyle = (color) => {
    return { color: `var(--${color})` };
  };

  const balanceIcon = (
    <BsReception3
      style={{
        borderBottom: "1px solid var(--purple)",
        ...customStyle("purple"),
      }}
    />
  );

  const incomesIcon = <BsGraphUp style={customStyle("green")} />;
  const expensesIcon = <BsGraphDown style={customStyle("red")} />;

  return (
    <div>
      <div className="balance_grid">
        <Transactions title="Your recent activities" />
        <div className="transaction_cards">
          <TransactionValueCard
            title="Current balance"
            goto="/transactions"
            value={totalBalance}
            icon={balanceIcon}
          />

          <TransactionValueCard
            title="Incomes"
            goto="/incomes"
            value={totalIncomes}
            icon={incomesIcon}
          />

          <TransactionValueCard
            title="Expenses"
            goto="/expenses"
            value={totalExpenses}
            icon={expensesIcon}
          />
        </div>
      </div>
      {/* <Reports transactions={transactions} /> */}
    </div>
  );
};

export default Dashboard;
