import MonthChart from "./Chart/MonthChart";

const ExpensesPerMonthGraphic = (props) => {
  return (
    <div>
      <h3 style={{ marginBottom: "1rem" }} className="subtitle">
        Expenses Per Month Graphic
      </h3>
      <MonthChart expenses={props.expenses} />
    </div>
  );
};

export default ExpensesPerMonthGraphic;
