import { useState } from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const ThWithSort = (props) => {
  const { sortedList, comparableKey, onToggle } = props;
  const [showDecrescent, setShowDecrescent] = useState(false);

  const toggleDecrescentHandler = () => {
    const sortCrescent = () =>
      [...sortedList].sort((a, b) => a[comparableKey] - b[comparableKey]);

    const sortDecrescent = () =>
      [...sortedList].sort((a, b) => b[comparableKey] - a[comparableKey]);

    setShowDecrescent((prev) => {
      onToggle(prev === true ? sortDecrescent() : sortCrescent());
      return !prev;
    });
  };

  return (
    <th
      onClick={toggleDecrescentHandler}
      className="space-between row"
      style={{ cursor: "pointer" }}
    >
      {props.children}{" "}
      {showDecrescent ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
    </th>
  );
};

export default ThWithSort;
