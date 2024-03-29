import { NavLink } from "react-router-dom";
import { CreditCardCard, Container } from "../../components";

const CreditCardList = (props) => {
  const listedCreditCards = props.cards.map((card) => (
    <NavLink
      style={{
        marginBottom: "4rem",
        width: "100%",
      }}
      key={card.cardName}
      to={`/credit-card/${card.cardId}`}
    >
      <CreditCardCard {...card} />
    </NavLink>
  ));

  return (
    <Container className="column">
      <h2 className="container-title">Credit card list</h2>
      {listedCreditCards}
    </Container>
  );
};

export default CreditCardList;
