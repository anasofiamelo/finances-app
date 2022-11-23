import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCreditCard } from "../../../context/credit_card.context";
import {
  InvoicesTable,
  CreditCardDetails,
  AddInvoiceModal,
  Button,
} from "../../../components";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Invoices = () => {
  const { creditCard } = useParams();
  const { cards } = useCreditCard();

  const [updatedCards, setUpdatedCards] = useState(cards);
  const [showAddInvoiceModal, setShowAddInvoiceModal] = useState(false);

  const showAddCreditCardPurchaseHandler = () => {
    setShowAddInvoiceModal(true);
  };

  const hideAddCreditCardPurchaseHandler = () => {
    setShowAddInvoiceModal(false);
  };

  const foundCreditCard = updatedCards.find(
    (card) => card.cardName === creditCard
  );

  useEffect(() => {
    setUpdatedCards(cards);
  }, [cards]);

  return (
    <div className="credit-card_page_grid">
      <CreditCardDetails creditCard={{ ...foundCreditCard }} />
      <InvoicesTable creditCard={{ ...foundCreditCard }} />
      <Button
        buttonIcon={<BsFillPlusCircleFill />}
        onClick={showAddCreditCardPurchaseHandler}
      >
        New invoice
      </Button>
      {showAddInvoiceModal && (
        <AddInvoiceModal
          onClose={hideAddCreditCardPurchaseHandler}
          {...foundCreditCard}
        />
      )}
    </div>
  );
};

export default Invoices;
