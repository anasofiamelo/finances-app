import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { FiPlusCircle } from "react-icons/fi";
import {
  CreditCardCard,
  Button,
  AddCreditCardModal,
  BestCreditCardAvailable,
} from "../../components";

const CreditCardList = (props) => {
  const { cards } = useCreditCard();
  console.log(cards);
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
          <BestCreditCardAvailable></BestCreditCardAvailable>
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
