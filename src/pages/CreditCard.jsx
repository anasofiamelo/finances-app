import { CreditCardList, BestCreditCardAvailable } from "../components";
import { useCreditCard } from "../context/credit_card.context";

const CreditCard = (props) => {
  const { cards } = useCreditCard();
  return (
    <div className="credit-card_page_grid">
      <CreditCardList cards={cards} />
      <BestCreditCardAvailable cards={props.cards} />
    </div>
  );
};

export default CreditCard;
