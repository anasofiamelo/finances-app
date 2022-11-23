import moment from "moment";

const InvoiceTr = (props) => {
  const { invoice, index } = props;
  const { item, boughtIn, parcelValue, paidFromTotal } = invoice;
  const formattedDate = moment(boughtIn).format("DD/MM/YYYY");
  const valueStyle = { fontWeight: "500", color: "var(--red)" };

  return (
    <tr key={index} id={index}>
      <td>{formattedDate}</td>
      <td>
        {item} ({paidFromTotal})
      </td>
      <td style={valueStyle}>$ {parcelValue}</td>
    </tr>
  );
};

export default InvoiceTr;
