import { NavLink } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { Container } from "../../components";
import AddCreditCard from "./AddCreditCard";

const CreditCardList = (props) => {
  const { cards } = useCreditCard();

  const mappedCreditCards = cards.map((card) => (
    <div>
      <NavLink
        style={{ marginRight: "1rem" }}
        key={card.cardName}
        to={`/credit-card/${card.cardName}`}
      >
        {card.cardName}
      </NavLink>
    </div>
  ));
  return (
    <Container>
      <div className="space-between">
        <div>
          <h2>Your credit card list</h2>
          <div className="row">{mappedCreditCards}</div>
        </div>
        <AddCreditCard />
      </div>
    </Container>
  );
};

export default CreditCardList;
