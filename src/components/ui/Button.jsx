const Button = (props) => {
  return (
    <div style={props.style} onClick={props.onClick}>
      <button
        style={props.style}
        className="button_animated"
        type={props.type || "button"}
      >
        {props.buttonIcon}
        <span style={{ marginLeft: "1rem" }}>{props.buttonText}</span>
      </button>
    </div>
  );
};

export default Button;
