import React, { useState } from "react";
import { Icon } from "@iconify/react";

// -- styles: forms.css --

const SelectedBudgetOptionCard = (props) => {
  const { id: optionId, options } = props;

  const [monthValue, setMonthValue] = useState("");

  const changeMonthValueHandler = (event) => {
    const value = Number(event.target.value);
    const attOptions = options.map((option) => {
      if (optionId === option.id) {
        return { ...option, monthValue: value };
      }
      return option;
    });
    props.setOptions(attOptions);
    setMonthValue(value);
  };

  const label = (
    <span className="row">
      <span className="budget-input-optgroup-title">{props.optGroupTitle}</span>
      <Icon
        className="budget-input_label-icon"
        icon="material-symbols:arrow-forward-ios-rounded"
      />
      <span className="budget-input_label">{props.label}</span>
    </span>
  );

  return (
    <div className="column budget-input_container">
      <label className="budget-input_label-container" htmlFor={optionId}>
        {label}
      </label>
      <input
        value={monthValue}
        onChange={changeMonthValueHandler}
        className="budget-input"
        id={optionId}
        placeholder="Value per month"
        type="number"
      />
    </div>
  );
};

export default SelectedBudgetOptionCard;
