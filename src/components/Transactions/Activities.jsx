import { TransactionValueCard, Transactions } from "..";
import { useTransactions } from "../../context/finances.context";

import { BsReception3, BsGraphDown, BsGraphUp } from "react-icons/bs";

const Activities = (props) => {
  const { incomes, expenses, totalBalance, totalIncomes, totalExpenses } =
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
    <>
      <div className="balance_grid">
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
      <Transactions
        title={props.title}
        transactions={props.title === "Incomes" ? incomes : expenses}
      />
    </>
  );
};

export default Activities;
