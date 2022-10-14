import { useState } from "react";
import {
  Container,
  Button,
  AddCreditCardPurchase,
} from "../../../../components";
import { BsFillPlusCircleFill } from "react-icons/bs";

const CreditCardLimit = (props) => {
  const { creditCard } = props;

  const [showAddCreditCardPurchase, setShowAddCreditCardPurchase] =
    useState(false);

  const showAddCreditCardPurchaseHandler = () => {
    setShowAddCreditCardPurchase(true);
  };
  const hideAddCreditCardPurchaseHandler = () => {
    setShowAddCreditCardPurchase(false);
  };

  return (
    <>
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
              {...creditCard}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default CreditCardLimit;
