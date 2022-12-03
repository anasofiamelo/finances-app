const InvoiceTr = (props) => {
  const { invoice } = props;
  const { item, boughtInDate, parcelValue, paidFromTotal } = invoice;
  const formattedDate = boughtInDate.format("DD/MM/YYYY");
  return (
    <tr>
      <td>{formattedDate}</td>
      <td>
        {item} ({paidFromTotal})
      </td>
      <td style={{ fontWeight: "500", color: "var(--red)" }}>
        $ {parcelValue}
      </td>
    </tr>
  );
};

export default InvoiceTr;
