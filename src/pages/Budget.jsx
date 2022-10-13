import { useState } from "react";
import { Button, Container, Select } from "../components";
import { FiPlusCircle } from "react-icons/fi";
import { budget, yearOptions } from "../utils";
import moment from "moment";

const Budget = (props) => {
  const currentYear = moment().year();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const changeSelectedYearHandler = (e) =>
    setSelectedYear(Number(e.target.value));

  const selectedYearBudget = budget.filter((bud) => bud.year === selectedYear);

  const mappedBudget = selectedYearBudget.map((budget) => {
    const { type, year, value } = budget;
    const color = value > 0 ? "var(--green)" : "var(--red)";
    const paragraphStyle = { marginRight: "2rem" };

    return (
      <div className="row">
        <p style={paragraphStyle}>{type}</p>
        <p style={paragraphStyle}>{year}</p>
        <p style={{ ...paragraphStyle, color }}>{value.toFixed(2)}</p>
      </div>
    );
  });

  const perMonth = selectedYearBudget.reduce(
    (prev, current) => prev + current.value,
    0
  );

  return (
    <>
      <Container>
        <div className="space-between row">
          <h1 style={{ width: "fit-content" }} className="subtitle">
            Your Custom Budget on {selectedYear}
          </h1>

          <Select
            value={selectedYear}
            onChange={changeSelectedYearHandler}
            label="Select a year"
            options={yearOptions}
          />
        </div>

        <div>
          {mappedBudget.length ? (
            mappedBudget
          ) : (
            <p>No budget on selected year</p>
          )}
        </div>

        <div>
          <h4>
            Balance per month on {selectedYear}: {perMonth}
          </h4>
        </div>
      </Container>
    </>
    // <Button
    //   buttonIcon={<FiPlusCircle className="button-icon" />}
    //   buttonText="Add Budget"
    // />
  );
};

export default Budget;
