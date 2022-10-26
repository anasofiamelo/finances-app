import { useState } from "react";
import { InputLabel, MonthSwitch } from "../../components";

const TransactionHeader = (props) => {
  const [descriptionFilter, setDescriptionFilter] = useState();

  const changeDescriptionFilterHandler = (e) => {
    setDescriptionFilter(e.target.value);
    props.onChangeDescriptionFilter(e.target.value);
  };

  return (
    <>
      <h1 className="subtitle">{props.title}</h1>

      <div className="row" style={{ justifyContent: "center" }}>
        <MonthSwitch onChangeSelectedMonth={props.onChangeSelectedMonth} />
      </div>

      <div className="row">
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
