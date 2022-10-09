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

export const expensesIcons = {
  House: (
    <BsFillHouseFill
      className="type_icons"
      style={{ backgroundColor: "#5e60ce" }}
    />
  ),
  Insurance: (
    <FaUserShield
      className="type_icons"
      style={{ backgroundColor: "#62b6cb" }}
    />
  ),
  Maintenance: (
    <BsTools className="type_icons" style={{ backgroundColor: "#555b6e" }} />
  ),
  Shop: (
    <BsFillBagFill
      className="type_icons"
      style={{ backgroundColor: "#fb6f92" }}
    />
  ),
  Supermarket: (
    <BsCart4 className="type_icons" style={{ backgroundColor: "#ca7f63" }} />
  ),
  Food: (
    <IoFastFoodOutline
      className="type_icons"
      style={{ backgroundColor: "#240046" }}
    />
  ),
};

export default typeofExpenses;
