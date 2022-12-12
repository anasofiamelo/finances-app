import React from "react";
import Select from "react-select";
import { budgetOptions } from "../../utils/Transactions/typeofExpenses";
import { ButtonWithIcon } from "..";
import { Icon } from "@iconify/react";

const ConfigureBudgetFormFirstStep = (props) => {
  const shortcuts = {
    lightGreyBorder: "1px solid var(--light-grey)",
    standardFont: "var(--open-sans)",
  };

  const styles = {
    control: (base) => ({
      ...base,
      "&:hover": { border: shortcuts.lightGreyBorder },
      fontFamily: shortcuts.standardFont,
      fontWeight: "400",
      border: shortcuts.lightGreyBorder,
      boxShadow: "none",
      cursor: "pointer",
      fontSize: "1.3rem",
    }),
    option: (base) => ({
      ...base,
      fontFamily: shortcuts.standardFont,
      "&:hover": { backgroundColor: "var(--purple)", color: "var(--white)" },
      cursor: "pointer",
      fontSize: "1.3rem",
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--light-grey)",
      fontFamily: shortcuts.standardFont,
      fontWeight: "300",
    }),
  };

  return (
    <>
      <p className="modal_label">Select predefined budgets</p>
      <Select
        onChange={props.onChangeSelectedOptions}
        isMulti
        options={budgetOptions}
        closeMenuOnSelect={false}
        styles={styles}
        placeholder="Gym, School"
      />

      <div className="or_container">
        <span className="or_line" />
        <span className="or_text">or</span>
        <span className="or_line" />
      </div>

      <p className="modal_label">Fill your custom budget</p>

      <input
        className="custom_budget_input"
        placeholder="Your custom budget..."
      />

      <ButtonWithIcon
        className="modal_action-button"
        onClick={props.onNextButtonClick}
        buttonIcon={<Icon icon="material-symbols:arrow-forward-ios-rounded" />}
      >
        Next
      </ButtonWithIcon>
    </>
  );
};

export default ConfigureBudgetFormFirstStep;
