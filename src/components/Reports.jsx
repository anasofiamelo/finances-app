import { Container, Button } from "../components";
import useTransactionsPercentage from "../hooks/useTransactionsPercentage";
import { expensesIcons } from "../utils";
const Reports = (props) => {
  const { transactions } = props;
  //   const incomes = transactions.filter((transac) => transac.value > 0);
  //   const incomesTypePercentages = useTransactionsPercentage(incomes);

  const expenses = transactions.filter((transac) => transac.value < 0);
  const expensesTypePercentages = useTransactionsPercentage(expenses);

  const mappedPercentages = expensesTypePercentages.map((transaction) => {
    const { type, percentage } = transaction;
    const paragraphStyle = { marginRight: "2rem" };
    return (
      <div className="row">
        <p style={paragraphStyle}>{expensesIcons[type]}</p>
        <p style={paragraphStyle}>{type}</p>
        <p style={paragraphStyle}>{percentage}%</p>
      </div>
    );
  });

  const highestPercentage = expensesTypePercentages
    .sort((a, b) => a.percentage - b.percentage)
    .pop().type;

  return (
    <Container>
      <div className="row">
        <h1 className="subtitle">Reports</h1>
        {/* <Button buttonText="Add Report" /> */}
      </div>
      <h4>Most spend with: {highestPercentage}</h4>
      {mappedPercentages}
    </Container>
  );
};

export default Reports;
