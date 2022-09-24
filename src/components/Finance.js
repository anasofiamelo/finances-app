import { useState } from "react";
import { Balance } from "../components";
import { FiPlusCircle } from "react-icons/fi";
import AddTransaction from "./AddTransaction";

const Finance = (props) => {
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
        <FiPlusCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
      </button>
      {showAddModal && (
        <AddTransaction onClose={hideAddModalHandler}></AddTransaction>
      )}
      <Balance />
    </>
  );
};

export default Finance;
