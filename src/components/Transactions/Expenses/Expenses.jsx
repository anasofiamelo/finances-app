import { Transactions } from "../../";
import { useTransactions } from "../../../context/finances.context";

const Expenses = (props) => {
  const { transactions } = useTransactions();
  const expenses = transactions.filter((finance) => finance.value < 0);
  return (
    <>
      <Transactions
        balanceThead={["Type", "Description", "Value", "Date"]}
        transactions={expenses}
        balanceType="Expenses"
      />
    </>
  );
};

export default Expenses;
