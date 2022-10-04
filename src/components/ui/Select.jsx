const Select = (props) => {
  return (
    <div className="form-group">
      <select
        style={{ ...props.style }}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options}
      </select>
    </div>
  );
};

export default Select;
