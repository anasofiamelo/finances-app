import { BsCashCoin, BsThreeDots, BsBriefcaseFill } from "react-icons/bs";

const typeofIncomes = ["Salary", "Benefit", "Others"];

export const incomesIcons = {
  Salary: (
    <BsCashCoin
      className="type_icons"
      style={{ backgroundColor: "var(--green)" }}
    />
  ),
  Benefit: (
    <BsBriefcaseFill
      className="type_icons"
      style={{ backgroundColor: "#8c2f39" }}
    />
  ),
  Others: (
    <BsThreeDots
      className="type_icons"
      style={{ color: "var(--dark-black)" }}
    />
  ),
};

export default typeofIncomes;
