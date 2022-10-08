import { Container, Table } from "../../components";
import moment from "moment";
import { formatParcels } from "../../utils";

const CreditCardInvoicesTable = (props) => {
  const mappedFatura = props.invoices.map((invoice) => {
    const { purchasedItem, purchaseValue, purchasedIn, timesPurchased } =
      invoice;
    const oneInstallment = (purchaseValue / timesPurchased).toFixed(2);
    return (
      <tr key={purchasedItem}>
        <td>{purchasedItem}</td>
        <td>{moment(purchasedIn).format("DD/MM/YYYY")}</td>
        <td>$ {oneInstallment}</td>
        <td>{formatParcels(invoice, props.creditCard)}</td>
        <td>$ {purchaseValue.toFixed(2)}</td>
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
