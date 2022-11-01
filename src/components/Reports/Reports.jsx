import { Button, Container } from "..";
import useTransactionsPercentage from "../../hooks/useTransactionsPercentage";
import ExpensesPerCategoryGraphic from "./ExpensesPerCategoryGraphic";
import ExpensesPerMonthGraphic from "./ExpensesPerMonthGraphic";

const Reports = (props) => {
  const expenses = props.transactions.filter((transac) => transac.value < 0);
  const expensesPercentages = useTransactionsPercentage(expenses);

  return (
    <Container>
      <div className="row space-between">
        <h1 className="title">Reports</h1>
        <Button> Add report</Button>
      </div>
      <ExpensesPerCategoryGraphic expenses={expensesPercentages} />
      <ExpensesPerMonthGraphic expenses={expenses} />
    </Container>
  );
};

export default Reports;
