import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCreditCard } from "../../context/credit_card.context";
import {
  Container,
  Button,
  AddCreditCardPurchase,
  CreditCardInvoicesTable,
} from "../../components";
import { BsCreditCard, BsFillPlusCircleFill } from "react-icons/bs";

const CreditCardInvoices = () => {
  const { creditCard } = useParams();
  const { cards } = useCreditCard();
  const foundCreditCard = cards.find((card) => card.cardName === creditCard);
  const { invoices, cardLimit } = foundCreditCard;

  const [showAddCreditCardPurchase, setShowAddCreditCardPurchase] =
    useState(false);

  const showAddCreditCardPurchaseHandler = () => {
    setShowAddCreditCardPurchase(true);
  };
  const hideAddCreditCardPurchaseHandler = () => {
    setShowAddCreditCardPurchase(false);
  };

  return (
    <div className="credit-card_page_grid">
      <Container>
        <div className="space-between">
          <div className="row">
            <BsCreditCard
              className="button-icon"
              style={{ marginRight: "1rem", color: "var(--blue)" }}
            />

            <h2 style={{ width: "fit-content" }} className="subtitle">
              {creditCard}
            </h2>
          </div>

          <h3 style={{ width: "fit-content" }} className="subtitle">
            Limit of <b>${cardLimit.toFixed(2)}</b>
          </h3>
        </div>
      </Container>

      <Container>
        <h2 className="subtitle space-between">
          <span>Used limit</span>
          <span style={{ color: "var(--red)" }}>$ {Number(30).toFixed(2)}</span>
        </h2>

        <h3 className="subtitle space-between">
          <span>Available limit</span>
          <span style={{ color: "var(--green)" }}>
            $ {Number(170).toFixed(2)}
          </span>
        </h3>

        <div style={{ marginTop: "1rem", float: "right" }}>
          <Button
            buttonIcon={<BsFillPlusCircleFill />}
            buttonText="New purchase"
            onClick={showAddCreditCardPurchaseHandler}
          />

          {showAddCreditCardPurchase && (
            <AddCreditCardPurchase
              onClose={hideAddCreditCardPurchaseHandler}
              {...foundCreditCard}
            />
          )}
        </div>
      </Container>

      <CreditCardInvoicesTable
        invoices={invoices}
        creditCard={foundCreditCard}
      />
    </div>
  );
};

export default CreditCardInvoices;
