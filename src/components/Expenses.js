import Transaction from "./Transaction";
import { finances } from "../utils/";

const Expenses = (props) => {
  const expenses = finances.filter((finance) => finance.value < 0);
  return (
    <>
      <Transaction transactions={expenses} balanceType="Expenses" />
    </>
  );
};

export default Expenses;
