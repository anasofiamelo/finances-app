import { NavLink } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { CreditCardCard, Container, AddCreditCard } from "../../components";

const CreditCardList = (props) => {
  const { cards } = useCreditCard();

  const mappedCreditCards = cards.map((card) => (
    <NavLink
      style={{ marginRight: "1rem" }}
      key={card.cardName}
      to={`/credit-card/${card.cardName}`}
    >
      <CreditCardCard {...card} />
    </NavLink>
  ));
  return (
    <>
      <div className="credit-card_page_grid">
        <div className="credit-card_grid">{mappedCreditCards}</div>
        <div>
          <Container>
            <h2>Teste</h2>
          </Container>
          <AddCreditCard />
        </div>
      </div>
    </>
  );
};

export default CreditCardList;
