const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>{props.thead}</tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default Table;
