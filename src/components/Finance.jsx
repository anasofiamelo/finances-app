import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import AddTransaction from "./AddTransaction";

const Finance = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const showAddModalHandler = () => {
    setShowAddModal(true);
  };

  const hideAddModalHandler = () => {
    setShowAddModal(false);
  };

  return (
    <>
      <button onClick={showAddModalHandler}>
        Add Transac.
        <FiPlusCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
      </button>
      {showAddModal && (
        <AddTransaction onClose={hideAddModalHandler}></AddTransaction>
      )}
    </>
  );
};

export default Finance;
