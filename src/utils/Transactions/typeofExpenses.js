import { Icon } from "@iconify/react";

const typeofExpenses = [
  "House",
  "Insurance",
  "Maintenance",
  "Shop",
  "Supermarket",
  "Food",
];

export const budgetOptions = [
  {
    label: "Personal Expenses",
    options: [
      { id: 1, label: "Gym", value: "Gym", optGroupTitle: "Personal Expenses" },
      {
        id: 2,
        label: "Phone",
        value: "Phone",
        optGroupTitle: "Personal Expenses",
      },
      {
        id: 3,
        label: "Shopping",
        value: "Shopping",
        optGroupTitle: "Personal Expenses",
      },
      {
        id: 4,
        label: "Accessories",
        value: "Accessories",
        optGroupTitle: "Personal Expenses",
      },
    ],
  },
  {
    label: "Food",
    options: [
      { id: 5, label: "Lunch", value: "Lunch", optGroupTitle: "Food" },
      {
        id: 6,
        label: "Coffee/Snacks",
        value: "Coffee/Snacks",
        optGroupTitle: "Food",
      },
      {
        id: 7,
        label: "Supermarket",
        value: "Supermarket",
        optGroupTitle: "Food",
      },
      { id: 8, label: "Bakery", value: "Bakery", optGroupTitle: "Food" },
      {
        id: 9,
        label: "Restaurant",
        value: "Restaurant",
        optGroupTitle: "Food",
      },
    ],
  },
  {
    label: "House",
    options: [
      { id: 10, label: "Rent", value: "Rent", optGroupTitle: "House" },
      {
        id: 11,
        label: "Water bill",
        value: "Water bill",
        optGroupTitle: "House",
      },
      {
        id: 12,
        label: "Condominium",
        value: "Condominium",
        optGroupTitle: "House",
      },
      {
        id: 13,
        label: "Housekeeper",
        value: "Housekeeper",
        optGroupTitle: "House",
      },
      { id: 14, label: "Gas", value: "Gas", optGroupTitle: "House" },
      { id: 15, label: "Internet", value: "Internet", optGroupTitle: "House" },
      {
        id: 16,
        label: "Eletricity bill",
        value: "Eletricity bill",
        optGroupTitle: "House",
      },
      {
        id: 17,
        label: "Cleaning materials",
        value: "Cleaning materials",
        optGroupTitle: "House",
      },
      { id: 18, label: "Cable TV", value: "Cable TV", optGroupTitle: "House" },
      {
        id: 19,
        label: "Furniture",
        value: "Furniture",
        optGroupTitle: "House",
      },
      { id: 20, label: "Laundry", value: "Laundry", optGroupTitle: "House" },
    ],
  },
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
