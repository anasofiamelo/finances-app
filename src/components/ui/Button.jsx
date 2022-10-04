const Button = (props) => {
  return (
    <div
      style={props.style}
      onClick={props.onClick}
      className="button_animated-container"
    >
      <button
        style={props.style}
        className="button_animated"
        onClick={props.onClick}
      >
        {props.buttonIcon}
      </button>
      <span className="button-text_animated">{props.buttonText}</span>
    </div>
  );
};

export default Button;
