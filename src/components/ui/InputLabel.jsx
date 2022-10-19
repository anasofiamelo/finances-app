const InputLabel = (props) => {
  return (
    <div className="form-group column" style={{ ...props.style }}>
      {props.label && (
        <label className="label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <div className="row" style={{ width: "100%" }}>
        {props.inputIcon && <span>{props.inputIcon}</span>}
        <input
          style={{
            width: "100%",
            margin: "0",
            ...props.style,
            ...props.inputStyle,
          }}
          id={props.id}
          type={props.type || "text"}
          name={props.name}
          value={props.value || ""}
          placeholder={props.placeholder || props.label}
          onChange={props.onChange}
          checked={props.checked}
          min={props.min}
          max={props.max}
        />
      </div>
    </div>
  );
};

export default InputLabel;
