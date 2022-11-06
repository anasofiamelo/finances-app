import { useState } from "react";
import { Container, Table } from "../../components";
import { budget, totalBudget } from "../../utils";
const BudgetList = (props) => {
  const [year, setYear] = useState(2022);

  const changeYearHandler = (e) => setYear(e.target.value);

  const mappedBudget = budget.map((opt) => (
    <tr>
      <td>{opt.category}</td>
      <td>$ {opt.value.toFixed(2)}</td>
      <td>$ {(opt.value * 12).toFixed(2)}</td>
    </tr>
  ));

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
