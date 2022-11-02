import Chart from "./Chart/Chart";

const ExpensesPerCategoryGraphic = (props) => {
  return (
    <>
      <h2 className="subtitle">Expenses per category</h2>
      <div className="row space-between">
        <Chart expenses={props.expenses} />
      </div>
    </>
  );
};

export default ExpensesPerCategoryGraphic;
