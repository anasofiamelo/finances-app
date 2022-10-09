import { Container, Table } from "../../components";
import moment from "moment";
import { formatParcels } from "../../utils";

const CreditCardInvoicesTable = (props) => {
  const mappedFatura = props.invoices.map((invoice) => {
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
        <td>{formatParcels(invoice, props.creditCard)}</td>
        <td style={{ fontWeight: "500", color: "var(--green)" }}>
          $ {purchaseValue}
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <Table
        thead={
          <>
            <th>Item</th>
            <th>Date</th>
            <th>Value/Month</th>
            <th>Parcels</th>
            <th>Value</th>
          </>
        }
      >
        {mappedFatura}
      </Table>
    </Container>
  );
};

export default CreditCardInvoicesTable;
