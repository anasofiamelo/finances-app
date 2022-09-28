import { useParams } from "react-router-dom";
import { userCards } from "../../utils";
import moment from "moment";

const CreditCard = (props) => {
  const { creditCard } = useParams();

  const foundCreditCard = userCards.find(
    (card) => card.creditCard === creditCard
  );

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
    <div>
      <h2 style={{ marginBottom: "1rem" }}>{creditCard}</h2>
      <table>
        <thead>
          <tr>
            <td>Purchased Item</td>
            <td>Value</td>
            <td>Parcels</td>
            <td>Installment Value</td>
            <td>From</td>
            <td>To</td>
          </tr>
        </thead>
        <tbody>{mappedFatura}</tbody>
      </table>
    </div>
  );
};

export default CreditCard;
