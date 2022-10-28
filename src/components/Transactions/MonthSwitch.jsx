import { useReducer, useEffect } from "react";
import { months } from "moment";
import { current } from "../../utils";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const manageSelectedDate = (state, action) => {
  const isDecember = state.month === 11;
  const prevMonth = state.month - 1;
  const nextMonth = state.month + 1;
  const prevYear = state.year - 1;
  const nextYear = state.year + 1;
  const nextDisplayedMonth = state.displayedMonth + 1;
  const prevDisplayedMonth = state.displayedMonth - 1;

  if (action.type === "GO_FOWARDS") {
    if (isDecember) {
      return {
        month: nextMonth,
        year: nextYear,
        displayedMonth: 0,
      };
    }
    if (state.displayedMonth > 10) {
      return {
        month: nextMonth,
        year: nextYear,
        displayedMonth: 0,
      };
    }
    return {
      month: nextMonth,
      year: state.year,
      displayedMonth: nextDisplayedMonth,
    };
  }
  if (action.type === "GO_BACKWARDS") {
    if (state.month === 0) {
      return {
        month: prevMonth,
        year: prevYear,
        displayedMonth: 11,
      };
    }
    if (state.displayedMonth === 0) {
      return {
        month: prevMonth,
        year: prevYear,
        displayedMonth: 11,
      };
    }
    return {
      month: prevMonth,
      year: state.year,
      displayedMonth: prevDisplayedMonth,
    };
  }
};

const MonthSwitch = (props) => {
  const { onChangeSelectedMonth } = props;
  const { month, year } = current;
  const initialDate = { month, year, displayedMonth: month };
  const monthsArr = months();
  const [selectedDate, dispatchSelectDate] = useReducer(
    manageSelectedDate,
    initialDate
  );

  const goFowards = () => {
    dispatchSelectDate({ type: "GO_FOWARDS" });
    props.onChangeSelectedMonth(selectedDate);
  };

  const goBackwards = () => {
    dispatchSelectDate({ type: "GO_BACKWARDS" });
    props.onChangeSelectedMonth(selectedDate);
  };

  useEffect(() => {
    onChangeSelectedMonth(selectedDate);
  }, [selectedDate, onChangeSelectedMonth]);

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
          <div className="column">
            <span>{monthsArr[selectedDate.displayedMonth]}</span>
            <span style={{ fontSize: "0.6rem", textAlign: "center" }}>
              {selectedDate.year}
            </span>
          </div>
        </button>
        <button onClick={goFowards} style={{ ...styleObj }}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </>
  );
};

export default MonthSwitch;
