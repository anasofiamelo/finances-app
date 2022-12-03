import React from "react";
import { Icon } from "@iconify/react";

// -- styles: forms.css --

const SelectedBudgetOptionCard = (props) => {
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
    <div key={props.id} className="column budget-input_container">
      <label className="budget-input_label-container" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="budget-input"
        id={props.id}
        placeholder="Value per month"
        type="number"
        onChange={props.onChangeValue}
      />
    </div>
  );
};

export default SelectedBudgetOptionCard;
