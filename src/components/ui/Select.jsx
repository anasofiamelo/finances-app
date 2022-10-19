const Select = (props) => {
  return (
    <div className="form-group column">
      {props.label && (
        <label className="label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <div className="row" style={{ width: "100%" }}>
        {props.selectIcon && <span>{props.selectIcon}</span>}
        <select
          style={{ width: "100%" }}
          value={props.value}
          onChange={props.onChange}
          id={props.id}
        >
          {props.options}
        </select>
      </div>
    </div>
  );
};

export default Select;
