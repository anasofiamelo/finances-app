import { useState } from "react";
import useSort from "../../../hooks/useSort";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const ThWithSort = (props) => {
  const { sortedList, comparableKey, onToggle } = props;
  const [showDecrescent, setShowDecrescent] = useState(false);
  const sorted = useSort(sortedList, comparableKey, showDecrescent);

  const toggleDecrescentHandler = () => {
    onToggle(sorted);
    setShowDecrescent((prev) => !prev);
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
