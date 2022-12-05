const Button = (props) => {
  const classes = props.className ? `${props.className}` : "";
  return (
    <button
      className={classes}
      onClick={props.onClick}
      style={props.style}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
