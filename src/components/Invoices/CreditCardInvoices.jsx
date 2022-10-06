import { useParams } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { Table, Container } from "../../components";
import { BsCreditCard } from "react-icons/bs";
import moment from "moment";

const CreditCardInvoices = (props) => {
  const { creditCard } = useParams();
  const { cards } = useCreditCard();

  const foundCreditCard = cards.find((card) => card.cardName === creditCard);

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
    <div className="credit-card_page_grid">
      <Container>
        <div className="space-between">
          <div className="row">
            <BsCreditCard
              className="button-icon"
              style={{ marginRight: "1rem", color: "var(--blue)" }}
            />
            <h2 style={{ width: "fit-content" }} className="subtitle">
              {creditCard}
            </h2>
          </div>
          <h3 style={{ width: "fit-content" }} className="subtitle">
            Limit of <b>${foundCreditCard.cardLimit.toFixed(2)}</b>
          </h3>
        </div>
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
      <Container>
        <h2 className="subtitle space-between">
          <span>Used limit</span>
          <span style={{ color: "var(--red)" }}>$ {Number(30).toFixed(2)}</span>
        </h2>
        <h3 className="subtitle space-between">
          <span>Available limit</span>
          <span style={{ color: "var(--green)" }}>
            $ {Number(170).toFixed(2)}
          </span>
        </h3>
      </Container>
    </div>
  );
};

export default CreditCardInvoices;
