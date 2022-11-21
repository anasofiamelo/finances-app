const Button = (props) => {
  return (
    <div
      className="button_animated-container"
      style={props.style}
      onClick={props.onClick}
    >
      <button style={props.style} type={props.type || "button"}>
        {props.buttonIcon}
        <span style={{ marginLeft: props.buttonIcon ? "1rem" : "0" }}>
          {props.children}
        </span>
      </button>
    </div>
  );
};

export default Button;
