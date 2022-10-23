import classes from "../Reports.module.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  console.log("props.expenses", props.expenses);
  const mappedPercentagesOnGraphic = props.expenses.map((transaction) => {
    return <ChartBar {...transaction} />;
  });

  return (
    <div className={classes["chart-bar__container"]}>
      {mappedPercentagesOnGraphic}
    </div>
  );
};

export default Chart;
