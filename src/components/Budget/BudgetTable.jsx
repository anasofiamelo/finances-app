import { useState } from "react";
import { Container, Table } from "..";
import { budget, totalBudget, formatValue } from "../../utils";

const BudgetTable = (props) => {
  const [year, setYear] = useState(2022);
  // const changeYearHandler = (e) => setYear(e.target.value);

  const mappedBudget = budget.map((opt) => {
    const monthValue = formatValue(opt.value);
    const yearValue = formatValue(opt.value * 12);
    return (
      <tr>
        <td>{opt.category}</td>
        <td>{monthValue}</td>
        <td>{yearValue}</td>
        <td>EditBtn DeleteBtn</td>
      </tr>
    );
  });

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
        {mappedBudget}
      </Table>
      <h3 className="subtitle">
        {year} preview: $ {totalBudget(year)}
      </h3>
    </>
  );
};

export default BudgetTable;
