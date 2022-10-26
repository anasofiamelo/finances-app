import { useState } from "react";
import { months } from "moment";
import { current } from "../utils";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Teste = (props) => {
  const { month } = current;

  const monthsArr = months();

  const [currentMonth, setCurrentMonth] = useState(month);
  const [nextMonth, setNextMonth] = useState(month + 1);
  const [prevMonth, setPrevMonth] = useState(month - 1);

  const goFowards = () => {
    let currMonthState = currentMonth;
    let currMonth = currMonthState + 1;

    setPrevMonth(currMonthState);
    setCurrentMonth(currMonth);
    setNextMonth(currMonthState + 2);
    props.onChangeSelectedMonth(currMonth);
  };

  const goBackwards = () => {
    let currMonthState = currentMonth;
    let currMonth = currMonthState - 1;

    setPrevMonth(currMonthState - 2);
    setCurrentMonth(currMonth);
    setNextMonth(currMonthState);
    props.onChangeSelectedMonth(currMonth);
  };

  const styleObj = {
    color: "var(--white)",
    fontSize: "1.2rem",
    marginRight: "2rem",
    cursor: "pointer",
  };

  return (
    <>
      <div className="row" style={{ marginBottom: "1rem" }}>
        <button onClick={goBackwards} style={{ ...styleObj }}>
          <BsFillArrowLeftCircleFill />
          {/* {monthsArr[prevMonth]} */}
        </button>
        <button style={{ ...styleObj }}>{monthsArr[currentMonth]}</button>
        <button onClick={goFowards} style={{ ...styleObj }}>
          <BsFillArrowRightCircleFill />
          {/* {monthsArr[nextMonth]} */}
        </button>
      </div>
    </>
  );
};

export default Teste;
