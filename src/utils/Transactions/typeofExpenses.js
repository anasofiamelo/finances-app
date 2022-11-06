import {
  BsFillHouseFill,
  BsTools,
  BsFillBagFill,
  BsCart4,
} from "react-icons/bs";
import { Icon } from "@iconify/react";
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
    <Icon
      className="type_icons"
      style={{ color: expensesColors["House"] }}
      icon="clarity:house-line"
    />
  ),
  Insurance: (
    <Icon
      className="type_icons"
      style={{ color: expensesColors["Insurance"] }}
      icon="icon-park-outline:protect"
    />
  ),
  Maintenance: (
    <Icon
      className="type_icons"
      style={{ color: expensesColors["Maintenance"] }}
      icon="heroicons:wrench-screwdriver"
    />
  ),
  Shop: (
    <Icon
      className="type_icons"
      style={{ color: expensesColors["Shop"] }}
      icon="icon-park-outline:weixin-market"
    />
  ),
  Supermarket: (
    <Icon
      className="type_icons"
      style={{ color: expensesColors["Supermarket"] }}
      icon="ps:cart-supermarket"
    />
  ),
  Food: (
    <Icon
      className="type_icons"
      style={{ color: expensesColors["Food"] }}
      icon="ion:fast-food-outline"
    />
  ),
};

export default typeofExpenses;
