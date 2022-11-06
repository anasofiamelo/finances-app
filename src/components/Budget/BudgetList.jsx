import { useState } from "react";
import { Container, Table } from "../../components";
import { budget, totalBudget } from "../../utils";
import { formatValue } from "../../utils";

const BudgetList = (props) => {
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
      </tr>
    );
  });

  return (
    <Container>
      <h2 className="title">Budget</h2>
      <Table
        thead={
          <>
            <th>Category</th>
            <th>Value/Month</th>
            <th>Value/Year</th>
          </>
        }
      >
        {mappedBudget}
      </Table>
      <h3 className="subtitle">
        {year} preview: $ {totalBudget(year)}
      </h3>
    </Container>
  );
};

export default BudgetList;
