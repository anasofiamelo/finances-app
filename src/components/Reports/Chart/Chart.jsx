import classes from "../Reports.module.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
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
