import { TransactionValueCard } from "../../components";
import { useTransactions } from "../../context/finances.context";
import { BsReception3, BsGraphDown, BsGraphUp } from "react-icons/bs";

const TransactionValueCards = (props) => {
  const { totalBalance, totalIncomes, totalExpenses } = useTransactions();
  const customStyle = (color) => {
    return { color: `var(--${color})` };
  };

  const balanceIcon = <BsReception3 style={customStyle("light-grey")} />;
  const incomesIcon = <BsGraphUp style={customStyle("green")} />;
  const expensesIcon = <BsGraphDown style={customStyle("purple")} />;
  return (
    <>
      <TransactionValueCard
        backgroundColor="var(--black)"
        color="var(--white)"
        title="Current balance"
        goto="/transactions"
        value={totalBalance}
        icon={balanceIcon}
      />

      <TransactionValueCard
        backgroundColor="var(--less-lime)"
        title="Incomes"
        goto="/incomes"
        value={totalIncomes}
        icon={incomesIcon}
      />

      <TransactionValueCard
        backgroundColor="var(--less-purple)"
        color="var(--white)"
        title="Expenses"
        goto="/expenses"
        value={totalExpenses}
        icon={expensesIcon}
      />
    </>
  );
};

export default TransactionValueCards;
