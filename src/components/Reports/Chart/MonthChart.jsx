import { calcExpensesPerMonth } from "../../../utils";
import classes from "../Reports.module.css";
import MonthChartBar from "./MonthChartBar";

const MonthChart = (props) => {
  const expensesPerMonth = calcExpensesPerMonth(props.expenses);
  const expensesValues = expensesPerMonth.map((exp) => exp.value);
  const maxValue = Math.max(...expensesValues);

  const mappedChartsBar = expensesPerMonth.map((expense) => (
    <MonthChartBar
      key={expense.month}
      month={expense.month}
      value={expense.value}
      maxValue={maxValue}
    />
  ));

  return (
    <div className={classes["chart-bar__container"]}>{mappedChartsBar}</div>
  );
};

export default MonthChart;
