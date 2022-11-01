const Container = (props) => {
  const classes = `${props.className ? props.className : ""} container`;
  return (
    <div
      style={{ backgroundColor: props.backgroundColor || "var(--white)" }}
      className={classes}
    >
      {props.children}
    </div>
  );
};

export default Container;
