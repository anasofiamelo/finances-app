const Select = (props) => {
  return (
    <select
      style={{ ...props.style }}
      value={props.value}
      onChange={props.onChange}
    >
      <option value="All">All</option>
      {props.options}
    </select>
  );
};

export default Select;
