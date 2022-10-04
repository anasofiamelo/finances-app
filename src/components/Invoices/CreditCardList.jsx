import { NavLink } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { Container, Button } from "../../components";
import { FiPlusCircle } from "react-icons/fi";

const CreditCardList = (props) => {
  const { cards } = useCreditCard();

  const mappedCreditCards = cards.map((card) => (
    <div>
      <NavLink
        style={{ marginRight: "1rem" }}
        key={card.creditCard}
        to={`/credit-card/${card.creditCard}`}
      >
        {card.creditCard}
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
        <Button
          buttonText="Add credit card"
          buttonIcon={<FiPlusCircle style={{ fontSize: "2rem" }} />}
        />
      </div>
    </Container>
  );
};

export default CreditCardList;
