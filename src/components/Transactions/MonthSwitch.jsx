import { useState } from "react";
import { months } from "moment";
import { current } from "../../utils";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const MonthSwitch = (props) => {
  const { month } = current;

  const monthsArr = months();

  const [currentMonth, setCurrentMonth] = useState(month);
  // const [nextMonth, setNextMonth] = useState(month + 1);
  // const [prevMonth, setPrevMonth] = useState(month - 1);

  const goFowards = () => {
    let currMonthState = currentMonth;
    let newCurrentMonth = currMonthState + 1;
    //
    // setPrevMonth(currMonthState);
    // setNextMonth(currMonthState + 2);
    setCurrentMonth(newCurrentMonth);
    props.onChangeSelectedMonth(newCurrentMonth);
  };

  const goBackwards = () => {
    let currMonthState = currentMonth;
    let newCurrentMonth = currMonthState - 1;

    // setPrevMonth(currMonthState - 2);
    // setNextMonth(currMonthState);
    setCurrentMonth(newCurrentMonth);
    props.onChangeSelectedMonth(newCurrentMonth);
  };

  const styleObj = {
    fontSize: "1.4rem",
    marginRight: "1rem",
    background: "none",
    color: "var(--purple)",
    textTransform: "uppercase",
    fontWeight: "600",
  };

  return (
    <>
      <div className="row" style={{ marginBottom: "1rem" }}>
        <button onClick={goBackwards} style={{ ...styleObj }}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          style={{
            ...styleObj,
            fontSize: "1.2rem",
            padding: ".6rem 1.5rem",
            border: "1px solid var(--purple)",
          }}
        >
          {monthsArr[currentMonth]}
        </button>
        <button onClick={goFowards} style={{ ...styleObj }}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </>
  );
};

export default MonthSwitch;
