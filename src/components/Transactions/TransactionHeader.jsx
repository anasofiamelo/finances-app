import { useState } from "react";
import { InputLabel, MonthSwitch } from "../../components";
import ReactSelect from "../ui/ReactSelect";
import { expensesOptions } from "../../utils/Transactions/typeofExpenses";

const TransactionHeader = (props) => {
  const [descriptionFilter, setDescriptionFilter] = useState();

  const changeDescriptionFilterHandler = (e) => {
    setDescriptionFilter(e.target.value);
    props.onChangeDescriptionFilter(e.target.value);
  };

  const changeTypeFilterHandler = (item) =>
    props.onChangeTypeFilter(item.value);
  return (
    <>
      <h1 className="title">{props.title}</h1>

      <div className="row" style={{ justifyContent: "center" }}>
        <MonthSwitch onChangeSelectedMonth={props.onChangeSelectedMonth} />
      </div>

      <div className="row space-between">
        <ReactSelect
          label="Filter by type"
          onChange={changeTypeFilterHandler}
          options={expensesOptions}
        />

        <InputLabel
          inputStyle={{ backgroundColor: "var(--white)", fontSize: "0.9rem" }}
          label="Filter by description"
          placeholder="Shopping..."
          value={descriptionFilter}
          onChange={changeDescriptionFilterHandler}
        />
      </div>
    </>
  );
};

export default TransactionHeader;
