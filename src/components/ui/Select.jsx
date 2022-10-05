const Select = (props) => {
  return (
    <div className="form-group column">
      {props.label && (
        <label className="label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <select
        style={{ ...props.style }}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
      >
        {props.options}
      </select>
    </div>
  );
};

export default Select;
