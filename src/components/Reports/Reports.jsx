import { Button } from "..";
import useTransactionsPercentage from "../../hooks/useTransactionsPercentage";
import ExpensesPerCategoryGraphic from "./ExpensesPerCategoryGraphic";
import ExpensesPerMonthGraphic from "./ExpensesPerMonthGraphic";

const Reports = (props) => {
  const expenses = props.transactions.filter((transac) => transac.value < 0);
  const expensesPercentages = useTransactionsPercentage(expenses);

  return (
    <div>
      <div className="row space-between">
        <h1 className="subtitle">Reports</h1>
        <Button> Add report</Button>
      </div>
      <ExpensesPerCategoryGraphic expenses={expensesPercentages} />
      <ExpensesPerMonthGraphic expenses={expenses} />
    </div>
  );
};

export default Reports;
