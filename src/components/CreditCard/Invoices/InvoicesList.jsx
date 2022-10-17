import { useState, useEffect } from "react";
import { Container, Table, ThWithSort, CreditCardInvoice } from "../..";
import moment from "moment";

const InvoicesList = (props) => {
  const { creditCard } = props;
  const { invoices } = creditCard;

  const [sortedInvoices, setSortedInvoices] = useState(invoices);
  const [detailedInvoice, setDetailedInvoice] = useState(null);

  const showDetailedInvoiceHandler = (event) => {
    const itemName = event.target.parentElement.id;
    const invoice = invoices.find((invoice) => invoice.item.includes(itemName));
    setDetailedInvoice(invoice);
  };

  useEffect(() => {
    setSortedInvoices(invoices);
  }, [invoices]);

  const hideDetailedInvoiceHandler = () => setDetailedInvoice(null);

  const mappedFatura = sortedInvoices.map((invoice) => {
    const { item, boughtIn, parcelValue, paidFromTotal } = invoice;

    const formattedDate = moment(boughtIn).format("DD/MM/YYYY");
    const valueStyle = { fontWeight: "500", color: "var(--green)" };

    return (
      <tr onClick={showDetailedInvoiceHandler} key={item} id={item}>
        <td>{formattedDate}</td>
        <td>
          {item} ({paidFromTotal})
        </td>
        <td style={valueStyle}>$ {parcelValue}</td>
      </tr>
    );
  });

  const changeInvoicesHandler = (invoices) => {
    setSortedInvoices(invoices);
  };

  return (
    <Container>
      <Table
        thead={
          <>
            <ThWithSort
              comparableKey="boughtIn"
              sortedList={invoices}
              onToggle={changeInvoicesHandler}
            >
              Date
            </ThWithSort>
            <th>Description</th>
            <th>Value</th>
          </>
        }
      >
        {mappedFatura}
      </Table>
      {detailedInvoice && (
        <CreditCardInvoice
          onClose={hideDetailedInvoiceHandler}
          invoice={detailedInvoice}
        />
      )}
    </Container>
  );
};

export default InvoicesList;
