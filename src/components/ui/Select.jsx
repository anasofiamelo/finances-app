const Select = (props) => {
  return (
    <div style={{ ...props.style }} className="form-group column">
      {props.label && (
        <label className="label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <div className="row">
        {props.selectIcon && <span>{props.selectIcon}</span>}
        <select
          style={{ ...props.style }}
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
