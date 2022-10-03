const Container = (props) => {
  const classes = `${props.className ? props.className : ""} container`;
  return (
    <div style={{ backgroundColor: props.backgroundColor }} className={classes}>
      {props.children}
    </div>
  );
};

export default Container;
