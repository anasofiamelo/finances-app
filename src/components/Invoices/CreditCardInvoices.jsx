import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import { CreditCardInvoicesTable, CreditCardDetails } from "../../components";
import { formatInvoices } from "../../utils";

const CreditCardInvoices = () => {
  const { creditCard } = useParams();
  const { cards } = useCreditCard();
  const [updatedCards, setUpdatedCards] = useState(cards);

  const foundCreditCard = updatedCards.find(
    (card) => card.cardName === creditCard
  );

  const formattedInvoices = formatInvoices(foundCreditCard);
  console.log("formattedInvoices from invoices", formattedInvoices);

  useEffect(() => {
    setUpdatedCards(cards);
  }, [cards]);

  return (
    <div className="credit-card_page_grid">
      <CreditCardDetails
        creditCard={{ ...foundCreditCard, invoices: formattedInvoices }}
      />
      <CreditCardInvoicesTable
        creditCard={{ ...foundCreditCard, invoices: formattedInvoices }}
      />
    </div>
  );
};

export default CreditCardInvoices;
