import { Container, Button } from "..";
import useTransactionsPercentage from "../../hooks/useTransactionsPercentage";
import ExpensesPerCategoryGraphic from "./ExpensesPerCategoryGraphic";
import ExpensesPerMonthGraphic from "./ExpensesPerMonthGraphic";

const Reports = (props) => {
  const { transactions } = props;

  const expenses = transactions.filter((transac) => transac.value < 0);
  const expensesPercentages = useTransactionsPercentage(expenses);

  // const highestPercentage = percentagesOfExpenses
  // .sort((a, b) => a.percentage - b.percentage)
  // .pop().type;

  return (
    <Container>
      <div className="row space-between">
        <h1 className="subtitle">Reports</h1>
        <Button> Add report</Button>
      </div>
      {/* <h4>Most spend with: {highestPercentage}</h4> */}
      <ExpensesPerCategoryGraphic expenses={expensesPercentages} />
      <ExpensesPerMonthGraphic expenses={expenses} />
    </Container>
  );
};

export default Reports;
