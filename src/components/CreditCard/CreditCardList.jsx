import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { FiPlusCircle } from "react-icons/fi";

import {
  CreditCardCard,
  Container,
  Button,
  AddCreditCardModal,
} from "../../components";

const CreditCardList = (props) => {
  const { cards } = useCreditCard();

  const [showAddCreditCardModal, setShowAddCreditCardModal] = useState(false);
  const showAddCreditCardModalHandler = () => setShowAddCreditCardModal(true);
  const hideAddCreditCardModalHandler = () => setShowAddCreditCardModal(false);

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
          <Button
            buttonIcon={<FiPlusCircle style={{ fontSize: "2rem" }} />}
            onClick={showAddCreditCardModalHandler}
          >
            New Credit Card
          </Button>
        </div>

        {showAddCreditCardModal && (
          <AddCreditCardModal onClose={hideAddCreditCardModalHandler} />
        )}
      </div>
    </>
  );
};

export default CreditCardList;
