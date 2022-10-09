import { Transaction, TransactionValueCard } from "../components";
import { useTransactions } from "../context/finances.context";
import { BsReception3, BsGraphDown, BsGraphUp } from "react-icons/bs";

const Balance = () => {
  const { transactions, totalBalance, totalIncomes, totalExpenses } =
    useTransactions();

  return (
    <>
      <div className="balance_grid">
        <TransactionValueCard
          valueType="Current balance"
          value={totalBalance}
          icon={
            <BsReception3
              style={{
                borderBottom: "1px solid var(--blue)",
                color: "var(--blue)",
              }}
            />
          }
        />

        <TransactionValueCard
          valueType="Incomes"
          value={totalIncomes}
          icon={
            <BsGraphUp
              style={{
                color: "var(--green)",
              }}
            />
          }
        />

        <TransactionValueCard
          valueType="Expenses"
          value={totalExpenses}
          icon={
            <BsGraphDown
              style={{
                color: "var(--red)",
              }}
            />
          }
        />
      </div>

      <Transaction
        balanceType="Your recent activities"
        transactions={transactions}
        balanceThead={["Category", "Description", "Value", "Date"]}
      />
    </>
  );
};

export default Balance;
