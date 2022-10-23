import classes from "../Reports.module.css";

const Chart = (props) => {
  return (
    <div className={classes["chart-bar__container"]}>{props.children}</div>
  );
};

export default Chart;
