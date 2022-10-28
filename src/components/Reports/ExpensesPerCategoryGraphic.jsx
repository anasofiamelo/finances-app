import { Container } from "../../components";
import Chart from "./Chart/Chart";
import { expensesIcons } from "../../utils";

const ExpensesPerCategoryGraphic = (props) => {
  const highestCategoryPercentage = props.expenses
    .slice()
    .sort((a, b) => a.percentage - b.percentage)
    .pop().type;

  const mappedExpensesIcons = props.expenses.map((expense, index) => (
    <div
      key={index}
      style={{ marginBottom: ".4rem" }}
      className="row space-between"
    >
      <p
        style={{
          fontWeight:
            highestCategoryPercentage === expense.type ? "700" : "300",
          fontSize: "0.8rem",
          marginRight: "1rem",
        }}
      >
        {expense.type}
      </p>
      <p style={{ fontSize: "1px" }}>{expensesIcons[expense.type]}</p>
    </div>
  ));

  return (
    <Container>
      <h2 style={{ marginBottom: "1rem" }} className="subtitle">
        Expenses Per Category
      </h2>
      <div className="row space-between">
        <Chart expenses={props.expenses} />
        <div>{mappedExpensesIcons}</div>
      </div>
    </Container>
  );
};

export default ExpensesPerCategoryGraphic;
