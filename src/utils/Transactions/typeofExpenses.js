import {
  BsFillHouseFill,
  BsTools,
  BsFillBagFill,
  BsCart4,
} from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";

const typeofExpenses = [
  "House",
  "Insurance",
  "Maintenance",
  "Shop",
  "Supermarket",
  "Food",
];

export const expensesColors = {
  House: "#9381ff",
  Insurance: "#62b6cb",
  Maintenance: "#555b6e",
  Shop: "#fb6f92",
  Supermarket: "#ca7f63",
  Food: "#240046",
};

export const expensesIcons = {
  House: (
    <BsFillHouseFill
      className="type_icons"
      style={{ backgroundColor: expensesColors["House"] }}
    />
  ),
  Insurance: (
    <FaUserShield
      className="type_icons"
      style={{ backgroundColor: expensesColors["Insurance"] }}
    />
  ),
  Maintenance: (
    <BsTools
      className="type_icons"
      style={{ backgroundColor: expensesColors["Maintenance"] }}
    />
  ),
  Shop: (
    <BsFillBagFill
      className="type_icons"
      style={{ backgroundColor: expensesColors["Shop"] }}
    />
  ),
  Supermarket: (
    <BsCart4
      className="type_icons"
      style={{ backgroundColor: expensesColors["Supermarket"] }}
    />
  ),
  Food: (
    <IoFastFoodOutline
      className="type_icons"
      style={{ backgroundColor: expensesColors["Food"] }}
    />
  ),
};

export default typeofExpenses;
