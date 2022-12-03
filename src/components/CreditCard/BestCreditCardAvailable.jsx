import { useState } from "react";
import {
  Container,
  AddCreditCardModal,
  ButtonWithIcon,
} from "../../components";
import { FiPlusCircle } from "react-icons/fi";

const BestCreditCardAvailable = (props) => {
  const [showAddCreditCardModal, setShowAddCreditCardModal] = useState(false);
  const showAddCreditCardModalHandler = () => setShowAddCreditCardModal(true);
  const hideAddCreditCardModalHandler = () => setShowAddCreditCardModal(false);
  return (
    <Container>
      <h2 className="subtitle">Best card to buy:</h2>
      <ButtonWithIcon
        buttonIcon={<FiPlusCircle style={{ fontSize: "1.9rem" }} />}
        onClick={showAddCreditCardModalHandler}
      >
        New credit card
      </ButtonWithIcon>

      {showAddCreditCardModal && (
        <AddCreditCardModal onClose={hideAddCreditCardModalHandler} />
      )}
    </Container>
  );
};

export default BestCreditCardAvailable;
