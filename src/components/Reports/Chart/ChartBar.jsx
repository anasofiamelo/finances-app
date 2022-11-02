import classes from "../Reports.module.css";
import { expensesIcons, expensesColors } from "../../../utils";
import { BarController } from "chart.js";

const ChartBar = (props) => {
  const { percentage, type } = props;

  return <BarController height={400} width={200} />;
};

export default ChartBar;
