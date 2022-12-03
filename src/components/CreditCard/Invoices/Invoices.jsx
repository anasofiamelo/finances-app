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
  const { creditCardId } = useParams();
  const { getCard, getCardInvoices } = useCreditCard();

  const [foundCreditCard, setFoundCreditCard] = useState({});
  const [creditCardInvoices, setCreditCardInvoices] = useState([]);
  const [showAddInvoiceModal, setShowAddInvoiceModal] = useState(false);

  const showAddCreditCardPurchaseHandler = () => {
    setShowAddInvoiceModal(true);
  };
  const hideAddCreditCardPurchaseHandler = () => {
    setShowAddInvoiceModal(false);
  };

  useEffect(() => {
    async function getClickedCardInfo() {
      const card = await getCard(creditCardId);
      const cardInvoices = await getCardInvoices(creditCardId);
      setFoundCreditCard(card);
      setCreditCardInvoices(cardInvoices);
    }

    getClickedCardInfo();
  }, [getCard, getCardInvoices, creditCardId]);

  return (
    <div className="credit-card_page_grid">
      <CreditCardDetails creditCard={{ ...foundCreditCard }} />
      <InvoicesTable
        creditCard={{ ...foundCreditCard, invoices: creditCardInvoices }}
      />
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
