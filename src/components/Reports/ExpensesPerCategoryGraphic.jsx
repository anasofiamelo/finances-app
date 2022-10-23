import Chart from "./Chart/Chart";
import { expensesIcons } from "../../utils";

const ExpensesPerCategoryGraphic = (props) => {
  const mappedExpensesIcons = props.expenses.map((expense) => (
    <div style={{ marginBottom: ".4rem" }} className="row space-between">
      <p style={{ fontSize: "0.8rem", marginRight: "1rem" }}>{expense.type}</p>
      <p style={{ fontSize: "1px" }}>{expensesIcons[expense.type]}</p>
    </div>
  ));

  return (
    <div>
      <h3 style={{ marginBottom: "1rem" }} className="subtitle">
        Expenses Graphic
      </h3>
      <div className="row space-between">
        <Chart expenses={props.expenses} />
        <div>{mappedExpensesIcons}</div>
      </div>
    </div>
  );
};

export default ExpensesPerCategoryGraphic;
