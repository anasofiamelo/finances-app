import { useState } from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const ThWithSort = (props) => {
  const { array, sortKey, onChangeArray } = props;
  const [showDecrescent, setShowDecrescent] = useState(false);

  const toggleDecrescentHandler = () => {
    const sortCrescent = () =>
      [...array].sort((a, b) => a[sortKey] - b[sortKey]);

    const sortDecrescent = () =>
      [...array].sort((a, b) => b[sortKey] - a[sortKey]);

    setShowDecrescent((prev) => {
      onChangeArray(prev === true ? sortDecrescent() : sortCrescent());
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
