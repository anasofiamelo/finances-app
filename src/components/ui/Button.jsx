const Button = (props) => {
  return (
    <div style={props.style} onClick={props.onClick}>
      <button
        style={props.style}
        className="button_animated"
        type={props.type || "button"}
      >
        {props.buttonIcon}
        <span style={{ marginLeft: props.buttonIcon ? "1rem" : "0" }}>
          {props.children}
        </span>
      </button>
    </div>
  );
};

export default Button;
