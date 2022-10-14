import { useParams } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { CreditCardInvoicesTable, CreditCardDetails } from "../../components";

const CreditCardInvoices = () => {
  const { creditCard } = useParams();
  const { cards } = useCreditCard();
  const foundCreditCard = cards.find((card) => card.cardName === creditCard);

  return (
    <div className="credit-card_page_grid">
      <CreditCardDetails creditCard={foundCreditCard} />
      <CreditCardInvoicesTable creditCard={foundCreditCard} />
    </div>
  );
};

export default CreditCardInvoices;
