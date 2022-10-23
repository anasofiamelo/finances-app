import classes from "../Reports.module.css";
import { expensesIcons, expensesColors } from "../../../utils";
const ChartBar = (props) => {
  const { percentage, type } = props;
  const heightPercentage = `${Number(percentage).toFixed()}%`;

  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div
          className={classes["chart-bar__fill"]}
          style={{
            height: heightPercentage,
            backgroundColor: expensesColors[type],
          }}
        ></div>
      </div>
      <div className={classes["chart-bar__percentage"]}>{`${percentage}%`}</div>
      <div className={classes["chart-bar__label"]}>{type}</div>
      <div className={classes["chart-bar__icon"]}>{expensesIcons[type]}</div>
    </div>
  );
};

export default ChartBar;
