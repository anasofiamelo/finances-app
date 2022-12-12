const ButtonWithIcon = (props) => {
  const classes = `${props.className}`;

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
      style={{
        backgroundColor: "var(--purple)",
        color: "var(--white)",
        ...props.style,
      }}
      onClick={props.onClick}
      className={classes}
      type={props.type || "button"}
    >
      <div>{button}</div>
    </button>
  );
};

export default ButtonWithIcon;
