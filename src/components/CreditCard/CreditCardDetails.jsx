import { Container, CreditCardLimit } from "../../components";
import { BsCreditCard } from "react-icons/bs";
import { current } from "../../utils";

const CreditCardDetails = (props) => {
  const { creditCard } = props;
  const { cardName, cardLimit, cardDueDay, cardClosureDay } = creditCard;
  const { day, fullMonth, nextMonth } = current;

  const passedDueDate = day > cardDueDay;
  const formattedDueDay =
    String(cardDueDay).length > 1 ? cardDueDay : `0${cardDueDay}`;

  const overduesIn = passedDueDate
    ? `${formattedDueDay}, ${nextMonth.format("MMMM")}`
    : `${formattedDueDay}, ${fullMonth}`;

  const closesIn = `${cardClosureDay}, ${fullMonth}`;

  return (
    <>
      <Container>
        <div className="space-between">
          <div className="row">
            <BsCreditCard className="credit-card-details_icon" />
            <h2 className="title">{cardName}</h2>
          </div>

          <h2 className="subtitle">
            Limit of <b>${cardLimit?.toFixed(2)}</b>
          </h2>
        </div>
        <div className="credit-card-details_description-container">
          <p>Closes in: {closesIn}</p>
          <p>Overdues in: {overduesIn}</p>
        </div>
      </Container>

      <CreditCardLimit creditCard={creditCard} />
    </>
  );
};
export default CreditCardDetails;
