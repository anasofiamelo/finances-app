const Input = (props) => {
  return (
    <div className="form-group" style={props.style}>
      <input
        style={{
          marginRight: "0.6rem",
          ...props.style,
        }}
        id={props.id}
        type={props.type || "text"}
        name={props.name}
        value={props.value || ""}
        placeholder={props.placeholder || props.label}
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
    </div>
  );
};

export default Input;
