import { Icon } from "@iconify/react";

const typeofExpenses = [
  "House",
  "Insurance",
  "Maintenance",
  "Shop",
  "Supermarket",
  "Food",
];

export const expensesOptions = [
  {
    label: "Personal Expenses",
    options: [
      {
        id: 1,
        label: "Gym",
        value: "Gym",
        optGroupTitle: "Personal Expenses",
        monthValue: 0,
      },
      {
        id: 2,
        label: "Phone",
        value: "Phone",
        optGroupTitle: "Personal Expenses",
        monthValue: 0,
      },
      {
        id: 3,
        label: "Shopping",
        value: "Shopping",
        optGroupTitle: "Personal Expenses",
        monthValue: 0,
      },
      {
        id: 4,
        label: "Accessories",
        value: "Accessories",
        optGroupTitle: "Personal Expenses",
        monthValue: 0,
      },
    ],
  },
  {
    label: "Credit card",
    options: [
      {
        id: 11,
        label: "Invoices",
        value: "Invoices",
        optGroupTitle: "Credit Card",
        monthValue: 0,
      },
    ],
  },
  {
    label: "Food",
    options: [
      {
        id: 5,
        label: "Lunch",
        value: "Lunch",
        optGroupTitle: "Food",
        monthValue: 0,
      },
      {
        id: 6,
        label: "Snacks/Coffee",
        value: "Snacks/Coffee",
        optGroupTitle: "Food",
        monthValue: 0,
      },
      {
        id: 7,
        label: "Supermarket",
        value: "Supermarket",
        optGroupTitle: "Food",
        monthValue: 0,
      },
      {
        id: 8,
        label: "Bakery",
        value: "Bakery",
        optGroupTitle: "Food",
        monthValue: 0,
      },
      {
        id: 9,
        label: "Restaurant",
        value: "Restaurant",
        optGroupTitle: "Food",
        monthValue: 0,
      },
    ],
  },
  {
    label: "House",
    options: [
      {
        id: 10,
        label: "Bill",
        value: "Bill",
        optGroupTitle: "House",
        monthValue: 0,
      },
      {
        id: 12,
        label: "Condominium",
        value: "Condominium",
        optGroupTitle: "House",
        monthValue: 0,
      },
      {
        id: 13,
        label: "Housekeeper",
        value: "Housekeeper",
        optGroupTitle: "House",
        monthValue: 0,
      },
      {
        id: 14,
        label: "Gas",
        value: "Gas",
        optGroupTitle: "House",
        monthValue: 0,
      },
      {
        id: 15,
        label: "Internet",
        value: "Internet",
        optGroupTitle: "House",
        monthValue: 0,
      },
      {
        id: 17,
        label: "Cleaning materials",
        value: "Cleaning materials",
        optGroupTitle: "House",
        monthValue: 0,
      },
      {
        id: 18,
        label: "Cable TV",
        value: "Cable TV",
        optGroupTitle: "House",
        monthValue: 0,
      },
      {
        id: 19,
        label: "Furniture",
        value: "Furniture",
        optGroupTitle: "House",
        monthValue: 0,
      },
      {
        id: 20,
        label: "Laundry",
        value: "Laundry",
        optGroupTitle: "House",
        monthValue: 0,
      },
    ],
  },
  {
    label: "Pet",
    options: [
      {
        id: 21,
        label: "PetShop",
        value: "PetShop",
        optGroupTitle: "Pet",
        monthValue: 0,
      },
      {
        id: 23,
        label: "Pet food",
        value: "Pet food",
        optGroupTitle: "Pet",
        monthValue: 0,
      },
    ],
  },
  {
    label: "Car",
    options: [
      {
        id: 21,
        label: "Gasoline",
        value: "Gasoline",
        optGroupTitle: "Car",
        monthValue: 0,
      },
    ],
  },
  {
    label: "Transfer",
    options: [
      {
        id: 21,
        label: "Money Transfer",
        value: "Money Transfer",
        optGroupTitle: "Transfer",
        monthValue: 0,
      },
    ],
  },
];

export const expensesOptionsIcons = {
  Gym: "iconoir:gym",
  Phone: "material-symbols:phone-android-outline-rounded",
  Shopping: "material-symbols:shopping-bag-outline",
  Accessories: "",
  Lunch: "material-symbols:lunch-dining-outline-rounded",
  "Snacks/Coffee": "icon-park-twotone:snacks",
  Bakery: "mdi:bakery",
  Restaurant: "ion:restaurant-outline",
  Bill: "uil:bill",
  Condominium: "mdi:house-city-outline",
  Housekeeper: "",
  Gas: "",
  Internet: "",
  "Cleaning materials": "",
  "Cable TV": "",
  Furniture: "",
  Laundry: "",
  PetShop: "map:pet-store",
  "Pet food": "fluent-emoji-high-contrast:petri-dish",
  "Pet medicine": "",
  Invoices: "material-symbols:credit-card-outline",
  Supermarket: "ps:cart-supermarket",
  Gasoline: "mdi:gasoline",
  "Money Transfer": "fa6-solid:money-bill-transfer",
};

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
