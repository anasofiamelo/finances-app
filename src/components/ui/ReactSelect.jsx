import React from "react";
import Select from "react-select";

const ReactSelect = (props) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      "&:hover": { border: "1px solid var(--purple)" },
      border: "1px solid var(--less-purple)",
      fontWeight: "400",
      boxShadow: "none",
      cursor: "pointer",
      fontSize: "1.3rem",
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: "var(--light-grey)",
      fontWeight: 300,
    }),
  };

  return (
    <div className="form-group ">
      <div>{props.label && <span className="label">{props.label}</span>}</div>
      <Select
        placeholder="Predefined options"
        styles={styles}
        onChange={props.changeValueHandler}
        options={props.options}
      />
    </div>
  );
};

export default ReactSelect;
