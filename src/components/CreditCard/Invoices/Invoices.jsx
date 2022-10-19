import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCreditCard } from "../../../context/credit_card.context";
import { InvoicesList, CreditCardDetails } from "../../../components";

const Invoices = () => {
  const { creditCard } = useParams();
  const { cards } = useCreditCard();
  const [updatedCards, setUpdatedCards] = useState(cards);

  const foundCreditCard = updatedCards.find(
    (card) => card.cardName === creditCard
  );

  useEffect(() => {
    setUpdatedCards(cards);
  }, [cards]);

  return (
    <div className="credit-card_page_grid">
      <CreditCardDetails creditCard={{ ...foundCreditCard }} />
      <InvoicesList creditCard={{ ...foundCreditCard }} />
    </div>
  );
};

export default Invoices;
