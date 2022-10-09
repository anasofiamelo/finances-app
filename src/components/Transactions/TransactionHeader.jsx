import { useState } from "react";
import { Select, InputLabel } from "../../components";
import { monthOptions } from "../../utils";
import moment from "moment";
import { BsFillCalendarMonthFill } from "react-icons/bs";

const TransactionHeader = (props) => {
  const [selectedMonth, setSelectedMonth] = useState(moment().month());
  const [descriptionFilter, setDescriptionFilter] = useState();

  const changeSelectedMonthHandler = (e) => {
    setSelectedMonth(e.target.value);
    props.onChangeSelectedMonth(e.target.value);
  };
  const changeDescriptionFilterHandler = (e) => {
    setDescriptionFilter(e.target.value);
    props.onChangeDescriptionFilter(e.target.value);
  };

  return (
    <>
      <div className="balance-header">
        <h1 className="subtitle">{props.title}</h1>
        <button
          style={{
            borderRadius: "1rem",
            background: "none",
            color: "var(--black)",
          }}
          onClick={props.onShowBalanceTable}
        ></button>
        <Select
          style={{
            backgroundColor: "var(--blue)",
            color: "var(--white)",
            borderRadius: "0.4rem",
          }}
          selectIcon={
            <BsFillCalendarMonthFill
              className="button-icon"
              style={{ marginLeft: "1rem" }}
            />
          }
          onChange={changeSelectedMonthHandler}
          value={selectedMonth}
          options={monthOptions}
        />
      </div>
      <div className="row" style={{ width: "fit-content" }}>
        <InputLabel
          inputStyle={{ backgroundColor: "var(--white)", fontSize: "0.9rem" }}
          label="Filter by description"
          placeholder="Shopping..."
          value={descriptionFilter}
          onChange={changeDescriptionFilterHandler}
        />
        {/* <Select
          label="Filter by type"
          options={
            <>
              <option> teste</option>
            </>
          }
        /> */}
      </div>
    </>
  );
};

export default TransactionHeader;
