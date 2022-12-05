import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCreditCard } from "../../../context/credit_card.context";
import {
  InvoicesTable,
  CreditCardDetails,
  AddInvoiceModal,
  ButtonWithIcon,
  Loading,
} from "../../../components";
import { FiPlusCircle } from "react-icons/fi";

const Invoices = () => {
  const { creditCardId } = useParams();
  const { getCard, getCardInvoices } = useCreditCard();

  const [foundCreditCard, setFoundCreditCard] = useState();
  const [creditCardInvoices, setCreditCardInvoices] = useState([]);
  const [showAddInvoiceModal, setShowAddInvoiceModal] = useState(false);

  const isLoading = foundCreditCard ? false : true;
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
    <>
      {!isLoading ? (
        <div className="credit-card_page_grid">
          <CreditCardDetails creditCard={{ ...foundCreditCard }} />
          <InvoicesTable
            creditCard={{ ...foundCreditCard, invoices: creditCardInvoices }}
            isLoading={isLoading}
          />
          <ButtonWithIcon
            buttonIcon={<FiPlusCircle style={{ fontSize: "1.9rem" }} />}
            onClick={showAddCreditCardPurchaseHandler}
          >
            New invoice
          </ButtonWithIcon>
          {showAddInvoiceModal && (
            <AddInvoiceModal
              onClose={hideAddCreditCardPurchaseHandler}
              {...foundCreditCard}
            />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Invoices;
