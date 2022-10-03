import { useParams } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { Table, Container } from "../../components";
import moment from "moment";

const CreditCard = (props) => {
  const { creditCard } = useParams();
  const { cards } = useCreditCard();

  const foundCreditCard = cards.find((card) => card.creditCard === creditCard);

  const mappedFatura = foundCreditCard.invoices.map(
    ({ item, totalValue, times, start }) => (
      <tr key={item}>
        <td>{item}</td>
        <td>${totalValue.toFixed(2)}</td>
        <td>{times}x</td>
        <td>${(totalValue / times).toFixed(2)}</td>
        <td>{`${moment(start).format("MMMM, YYYY")}`}</td>
        <td>{`${moment(start).add(times, "months").format("MMMM, YYYY")}`}</td>
      </tr>
    )
  );

  return (
    <Container>
      <h2 style={{ marginBottom: "1rem" }}>{creditCard}</h2>
      <Table
        thead={
          <>
            <td>Purchased Item</td>
            <td>Value</td>
            <td>Parcels</td>
            <td>Installment Value</td>
            <td>From</td>
            <td>To</td>
          </>
        }
      >
        {mappedFatura}
      </Table>
    </Container>
  );
};

export default CreditCard;
