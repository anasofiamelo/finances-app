import { useState } from "react";
import { Table } from "..";
import { totalBudget } from "../../utils";
import { useBudget } from "../../context/budget.context";
import BudgetTr from "./BudgetTr";

const BudgetTable = (props) => {
  const { userBudget } = useBudget();
  const [year, setYear] = useState(2022);
  // const changeYearHandler = (e) => setYear(e.target.value);

  return (
    <>
      <Table
        thead={
          <>
            <th>Category</th>
            <th>Value/Month</th>
            <th>Value/Year</th>
            <th>Actions</th>
          </>
        }
      >
        {userBudget.map((budget) => (
          <BudgetTr key={budget.budgetId} budget={budget} />
        ))}
      </Table>

      <h3 className="subtitle">
        {year} preview: $ {totalBudget(year)}
      </h3>
    </>
  );
};

export default BudgetTable;
