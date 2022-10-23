import { Container, Button } from "..";
import useTransactionsPercentage from "../../hooks/useTransactionsPercentage";
import Chart from "./Chart/Chart";
import MonthChart from "./Chart/MonthChart";

const Reports = (props) => {
  const { transactions } = props;

  const expenses = transactions.filter((transac) => transac.value < 0);
  const percentagesOfExpenses = useTransactionsPercentage(expenses);

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

      <div style={{ width: "50%" }}>
        <h3 style={{ marginBottom: "1rem" }} className="subtitle">
          Expenses Graphic
        </h3>

        <Chart expenses={percentagesOfExpenses} />
      </div>

      <div>
        <h3 className="subtitle">Teste</h3>
        <MonthChart expenses={expenses} />
      </div>
    </Container>
  );
};

export default Reports;
