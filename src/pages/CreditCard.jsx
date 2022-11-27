import { CreditCardList, BestCreditCardAvailable } from "../components";
import { useCreditCard } from "../context/credit_card.context";

const CreditCard = (props) => {
  const { userCards } = useCreditCard();
  return (
    <div className="credit-card_page_grid">
      <CreditCardList cards={userCards} />
      <BestCreditCardAvailable cards={props.cards} />
    </div>
  );
};

export default CreditCard;
