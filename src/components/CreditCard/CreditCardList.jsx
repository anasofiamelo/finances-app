import { NavLink } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import {
  CreditCardCard,
  BestCreditCardAvailable,
  Container,
} from "../../components";

const CreditCardList = (props) => {
  const { cards } = useCreditCard();

  const mappedCreditCards = cards.map((card) => (
    <NavLink
      style={{
        width: "100%",
        marginBottom: "4rem",
      }}
      key={card.cardName}
      to={`/credit-card/${card.cardName}`}
    >
      <CreditCardCard {...card} />
    </NavLink>
  ));

  return (
    <>
      <div className="credit-card_page_grid">
        <Container
          className="column"
          // style={{ backgroundColor: "var(--black)" }}
        >
          <h2 className="container-title">Credit card list</h2>
          {mappedCreditCards}
        </Container>

        <BestCreditCardAvailable cards={cards}></BestCreditCardAvailable>
      </div>
    </>
  );
};

export default CreditCardList;
