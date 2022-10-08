import { useState } from "react";
import { Select } from "../../components";
import { monthOptions } from "../../utils";
import moment from "moment";
import { BsFillCalendarMonthFill } from "react-icons/bs";

const TransactionHeader = (props) => {
  const [selectedMonth, setSelectedMonth] = useState(moment().month());

  const changeSelectedMonthHandler = (e) => {
    setSelectedMonth(e.target.value);
    props.onChangeSelectedMonth(e.target.value);
  };

  return (
    <div className="balance-header">
      <h1>{props.title}</h1>
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
  );
};

export default TransactionHeader;
