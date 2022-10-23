import { useState } from "react";
import { Container, Button, AddInvoiceModal } from "../../components";
import { BsFillPlusCircleFill } from "react-icons/bs";

const CreditCardLimit = (props) => {
  const { creditCard } = props;
  const { cardLimit, usedLimit } = creditCard;
  const availableLimit = (cardLimit - usedLimit).toFixed(2);
  const [showAddPurchaseModal, setShowAddPurchaseModal] = useState(false);

  const showAddCreditCardPurchaseHandler = () => {
    setShowAddPurchaseModal(true);
  };
  const hideAddCreditCardPurchaseHandler = () => {
    setShowAddPurchaseModal(false);
  };

  return (
    <>
      <Container>
        <h2 className="subtitle space-between">
          <span>Used limit</span>
          <span style={{ color: "var(--red)" }}>$ {creditCard.usedLimit}</span>
        </h2>

        <h3 className="subtitle space-between">
          <span>Available limit</span>
          <span style={{ color: "var(--green)" }}>$ {availableLimit}</span>
        </h3>

        <div style={{ marginTop: "1rem", float: "right" }}>
          <Button
            buttonIcon={<BsFillPlusCircleFill />}
            buttonText="New purchase"
            onClick={showAddCreditCardPurchaseHandler}
          />

          {showAddPurchaseModal && (
            <AddInvoiceModal
              onClose={hideAddCreditCardPurchaseHandler}
              {...creditCard}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default CreditCardLimit;
