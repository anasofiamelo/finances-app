import { useState } from "react";
import { Button, Container, Select } from "../components";
import { FiPlusCircle } from "react-icons/fi";
import { budget, yearOptions } from "../utils";
import moment from "moment";
import BudgetList from "../components/Budget/BudgetList";

const Budget = (props) => {
  return (
    <>
      <BudgetList />
    </>
  );
};

export default Budget;
