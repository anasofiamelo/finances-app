import classes from "../Reports.module.css";

const MonthChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div
          style={{ backgroundColor: "var(--purple)", height: barFillHeight }}
          className={classes["chart-bar__fill"]}
        ></div>
      </div>

      <div className={classes["chart-bar__label"]}>{props.month}</div>
    </div>
  );
};

export default MonthChartBar;
