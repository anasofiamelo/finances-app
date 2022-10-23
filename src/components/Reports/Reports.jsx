import { Container, Button } from "..";
import useTransactionsPercentage from "../../hooks/useTransactionsPercentage";
import ChartBar from "./Chart/ChartBar";
import Chart from "./Chart/Chart";

const Reports = (props) => {
  const { transactions } = props;

  const expenses = transactions.filter((transac) => transac.value < 0);
  const expensesTypePercentages = useTransactionsPercentage(expenses);

  const mappedPercentagesOnGraphic = expensesTypePercentages.map(
    (transaction) => {
      return <ChartBar {...transaction} />;
    }
  );

  const highestPercentage = expensesTypePercentages
    .sort((a, b) => a.percentage - b.percentage)
    .pop().type;

  return (
    <Container>
      <div className="row space-between">
        <h1 className="subtitle">Reports</h1>
        <Button> Add report</Button>
      </div>
      <h4>Most spend with: {highestPercentage}</h4>
      <div style={{ width: "50%" }}>
        <h2 style={{ marginBottom: "1rem" }} className="subtitle">
          Graphics
        </h2>
        <Chart>{mappedPercentagesOnGraphic}</Chart>
      </div>
    </Container>
  );
};

export default Reports;
