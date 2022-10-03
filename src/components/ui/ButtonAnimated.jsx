const ButtonAnimated = (props) => {
  return (
    <div onClick={props.onClick} className="button_animated-container">
      <button className="button_animated" onClick={props.onClick}>
        {props.buttonIcon}
      </button>
      <span className="button-text_animated">{props.buttonText}</span>
    </div>
  );
};

export default ButtonAnimated;
