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
          fontSize: "1.2rem",
          marginRight: "1rem",
        }}
      >
        {expense.type}
      </p>
      <p style={{ fontSize: "1px" }}>{expensesIcons[expense.type]}</p>
    </div>
  ));

  return (
    <>
      <h2 style={{ marginBottom: "1rem" }} className="subtitle">
        Expenses per category
      </h2>
      <div className="row space-between">
        <Chart expenses={props.expenses} />
        <div>{mappedExpensesIcons}</div>
      </div>
    </>
  );
};

export default ExpensesPerCategoryGraphic;
