import { useState } from "react";
import { Button } from "..";
import { FiPlusCircle } from "react-icons/fi";
import AddCreditCardModal from "./AddCreditCardModal";

const AddCreditCard = (props) => {
  const [showAddCreditCardModal, setShowAddCreditCardModal] = useState(false);
  const showAddCreditCardModalHandler = () => setShowAddCreditCardModal(true);
  const hideAddCreditCardModalHandler = () => setShowAddCreditCardModal(false);

  return (
    <>
      <Button
        buttonText="Add credit card"
        buttonIcon={<FiPlusCircle style={{ fontSize: "2rem" }} />}
        onClick={showAddCreditCardModalHandler}
      />
      {showAddCreditCardModal && (
        <AddCreditCardModal onClose={hideAddCreditCardModalHandler} />
      )}
    </>
  );
};

export default AddCreditCard;
