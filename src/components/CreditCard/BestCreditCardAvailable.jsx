import { useState } from "react";
import { Container, Button, AddCreditCardModal } from "../../components";
import { FiPlusCircle } from "react-icons/fi";

const BestCreditCardAvailable = (props) => {
  const [showAddCreditCardModal, setShowAddCreditCardModal] = useState(false);
  const showAddCreditCardModalHandler = () => setShowAddCreditCardModal(true);
  const hideAddCreditCardModalHandler = () => setShowAddCreditCardModal(false);
  return (
    <Container>
      <h2 className="subtitle">Best card to buy:</h2>
      <Button
        buttonIcon={<FiPlusCircle style={{ fontSize: "2rem" }} />}
        onClick={showAddCreditCardModalHandler}
      >
        New Credit Card
      </Button>

      {showAddCreditCardModal && (
        <AddCreditCardModal onClose={hideAddCreditCardModalHandler} />
      )}
    </Container>
  );
};

export default BestCreditCardAvailable;
