import { Transaction, TransactionValueCard, Reports } from "../components";
import { useTransactions } from "../context/finances.context";
import { BsReception3, BsGraphDown, BsGraphUp } from "react-icons/bs";

const Balance = () => {
  const { transactions, totalBalance, totalIncomes, totalExpenses } =
    useTransactions();

  const customStyle = (color) => {
    return { color: `var(--${color})` };
  };

  const balanceIcon = (
    <BsReception3
      style={{
        borderBottom: "1px solid var(--blue)",
        ...customStyle("blue"),
      }}
    />
  );
  const incomesIcon = <BsGraphUp style={customStyle("green")} />;
  const expensesIcon = <BsGraphDown style={customStyle("red")} />;

  return (
    <>
      <div className="balance_grid">
        <TransactionValueCard
          title="Current balance"
          value={totalBalance}
          icon={balanceIcon}
        />

        <TransactionValueCard
          title="Incomes"
          value={totalIncomes}
          icon={incomesIcon}
        />

        <TransactionValueCard
          title="Expenses"
          value={totalExpenses}
          icon={expensesIcon}
        />
      </div>

      <Transaction
        balanceType="Your recent activities"
        transactions={transactions}
        balanceThead={["Category", "Description", "Value", "Date"]}
      />

      <Reports transactions={transactions} />
    </>
  );
};

export default Balance;
