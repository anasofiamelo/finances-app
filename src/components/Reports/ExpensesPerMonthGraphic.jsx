import MonthChart from "./Chart/MonthChart";
import { Container } from "../../components";
const ExpensesPerMonthGraphic = (props) => {
  return (
    <Container>
      <h2 style={{ marginBottom: "1rem" }} className="title">
        Expenses Per Month
      </h2>
      <MonthChart expenses={props.expenses} />
    </Container>
  );
};

export default ExpensesPerMonthGraphic;
