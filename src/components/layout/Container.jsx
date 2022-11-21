const Container = (props) => {
  const classes = `${props.className ? props.className : ""} container`;
  return (
    <div style={{ ...props.style }} className={classes}>
      {props.children}
    </div>
  );
};

export default Container;
