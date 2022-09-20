import { finances } from "../utils/";
import Transaction from "./Transaction";

const Incomes = (props) => {
  const incomes = finances.filter((finance) => finance.value > 0);
  return (
    <>
      <Transaction transactions={incomes} balanceType="Incomes" />
    </>
  );
};

export default Incomes;
