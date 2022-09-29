import { Transaction } from "../../";
import { useTransactions } from "../../../context/finances.context";

const Incomes = () => {
  const { transactions } = useTransactions();
  const incomes = transactions.filter((finance) => finance.value > 0);

  return (
    <>
      <Transaction
        customTr={["Type", "Description", "Value", "Date"]}
        transactions={incomes}
        balanceType="Incomes"
      />
    </>
  );
};

export default Incomes;
