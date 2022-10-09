import { Container, Table, ThWithSort } from "../../components";
import moment from "moment";
import { formatParcels } from "../../utils";
import { useState } from "react";
import { useEffect } from "react";

const CreditCardInvoicesTable = (props) => {
  const { invoices, creditCard } = props;
  const [sortedInvoices, setSortedInvoices] = useState(invoices);

  useEffect(() => {
    setSortedInvoices(invoices);
  }, [invoices]);

  const mappedFatura = sortedInvoices.map((invoice) => {
    let { purchasedItem, purchaseValue, purchasedIn, timesPurchased } = invoice;

    purchaseValue = purchaseValue.toFixed(2);

    const oneInstallment = (purchaseValue / timesPurchased).toFixed(2);
    const formattedPurchasedInDate = moment(purchasedIn).format("DD/MM/YYYY");

    return (
      <tr key={purchasedItem}>
        <td>{purchasedItem}</td>
        <td>{formattedPurchasedInDate}</td>
        <td style={{ fontWeight: "500", color: "var(--green)" }}>
          $ {oneInstallment}
        </td>
        <td>{formatParcels(invoice, creditCard)}</td>
        <td style={{ fontWeight: "500", color: "var(--green)" }}>
          $ {purchaseValue}
        </td>
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
              comparableKey="purchasedIn"
              sortedList={invoices}
              onToggle={changeInvoicesHandler}
            >
              Date
            </ThWithSort>
            <th>Value/Month</th>
            <th>Parcels</th>
            <ThWithSort
              comparableKey="purchaseValue"
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
    </Container>
  );
};

export default CreditCardInvoicesTable;
