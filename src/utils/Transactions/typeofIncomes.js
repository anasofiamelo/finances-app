import { BsCashCoin, BsThreeDots, BsBriefcaseFill } from "react-icons/bs";
// import { Icon } from "@iconify/react";
const typeofIncomes = ["Salary", "Benefit", "Others"];

export const incomesOptions = [
  {
    id: 1,
    label: "Work",
    options: [
      { id: 1, label: "Salary", value: "Salary", optGroupTitle: "Work" },
      { id: 2, label: "Benefit", value: "Benefit", optGroupTitle: "Work" },
    ],
  },
  {
    id: 2,
    label: "Others",
    value: "Others",
  },
];

export const incomesIcons = {
  Salary: (
    <BsCashCoin className="type_icons" style={{ color: "var(--green)" }} />
  ),
  Benefit: (
    <BsBriefcaseFill className="type_icons" style={{ color: "#8c2f39" }} />
  ),
  Others: (
    <BsThreeDots
      className="type_icons"
      style={{ color: "var(--dark-black)" }}
    />
  ),
};

export default typeofIncomes;
