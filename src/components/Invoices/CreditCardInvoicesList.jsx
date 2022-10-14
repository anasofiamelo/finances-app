import { useState, useEffect } from "react";
import {
  Container,
  Table,
  ThWithSort,
  CreditCardInvoice,
} from "../../components";
import { formatParcels, formatInvoices } from "../../utils";
import moment from "moment";

const CreditCardInvoicesTable = (props) => {
  const { creditCard } = props;
  const invoices = formatInvoices(creditCard);

  const [sortedInvoices, setSortedInvoices] = useState(invoices);
  const [detailedInvoice, setDetailedInvoice] = useState(null);

  const showDetailedInvoiceHandler = (event) => {
    const itemName = event.target.parentElement.firstChild.innerText;
    const invoice = invoices.find((invoice) => invoice.item === itemName);
    setDetailedInvoice(invoice);
  };

  const hideDetailedInvoiceHandler = () => setDetailedInvoice(null);

  useEffect(() => {
    setSortedInvoices(invoices);
  }, [invoices]);

  const mappedFatura = sortedInvoices.map((invoice) => {
    const { item, value, boughtIn, parcelValue } = invoice;

    const formattedDate = moment(boughtIn).format("DD/MM/YYYY");
    const parcel = formatParcels(invoice, creditCard);
    const valueStyle = { fontWeight: "500", color: "var(--green)" };

    return (
      <tr onClick={showDetailedInvoiceHandler} key={item}>
        <td>{item}</td>
        <td>{formattedDate}</td>
        <td style={valueStyle}>$ {parcelValue}</td>
        <td>{parcel}</td>
        <td style={valueStyle}>$ {value.toFixed(2)}</td>
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
            <th>Item</th>
            <ThWithSort
              comparableKey="boughtIn"
              sortedList={invoices}
              onToggle={changeInvoicesHandler}
            >
              Date
            </ThWithSort>
            <th>Value/Month</th>
            <th>Parcels</th>
            <ThWithSort
              comparableKey="value"
              sortedList={invoices}
              onToggle={changeInvoicesHandler}
            >
              Value
            </ThWithSort>
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

export default CreditCardInvoicesTable;
