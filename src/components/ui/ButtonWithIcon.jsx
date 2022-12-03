const ButtonWithIcon = (props) => {
  const classes = `${props.className} button_animated-container`;

  const iconOnLeftSide = (
    <>
      <span className="button_icon button_icon_left">{props.buttonIcon}</span>
      <span>{props.children}</span>
    </>
  );

  const iconOnRightSide = (
    <>
      <span>{props.children}</span>
      <span className="button_icon button_icon_right">{props.buttonIcon}</span>
    </>
  );

  const button =
    props.iconPosition === "left" ? iconOnLeftSide : iconOnRightSide;

  return (
    <button
      onClick={props.onClick}
      className={classes}
      type={props.type || "button"}
    >
      <div className="row">{button}</div>
    </button>
  );
};

export default ButtonWithIcon;
