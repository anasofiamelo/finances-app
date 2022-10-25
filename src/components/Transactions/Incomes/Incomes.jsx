import { Transactions } from "../../";
import { useTransactions } from "../../../context/finances.context";

const Incomes = () => {
  const { transactions } = useTransactions();
  const incomes = transactions.filter((finance) => finance.value > 0);

  return (
    <>
      <Transactions
        balanceThead={["Type", "Description", "Value", "Date"]}
        transactions={incomes}
        balanceType="Incomes"
      />
    </>
  );
};

export default Incomes;
