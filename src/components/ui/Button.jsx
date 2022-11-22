const Button = (props) => {
  return (
    <div
      className="button_animated-container"
      style={props.style}
      onClick={props.onClick}
    >
      <button style={props.style} type={props.type || "button"}>
        {props.children}
        {props.buttonIcon}
      </button>
    </div>
  );
};

export default Button;
