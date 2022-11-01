import MonthChart from "./Chart/MonthChart";

const ExpensesPerMonthGraphic = (props) => {
  return (
    <>
      <h2 style={{ marginBottom: "1rem" }} className="subtitle">
        Expenses per month
      </h2>
      <MonthChart expenses={props.expenses} />
    </>
  );
};

export default ExpensesPerMonthGraphic;
