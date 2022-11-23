const ButtonWithIcon = (props) => {
  const classes = `${props.className} button_animated-container`;

  const iconOnLeftSide = (
    <div className="row">
      <span className="button_icon button_icon_left">{props.buttonIcon}</span>
      <span>{props.children}</span>
    </div>
  );

  const iconOnRightSide = (
    <div className="row">
      <span>{props.children}</span>
      <span className="button_icon button_icon_right">{props.buttonIcon}</span>
    </div>
  );

  const button =
    props.iconPosition === "left" ? iconOnLeftSide : iconOnRightSide;

  return (
    <button
      onClick={props.onClick}
      className={classes}
      type={props.type || "button"}
    >
      {button}
    </button>
  );
};

export default ButtonWithIcon;
