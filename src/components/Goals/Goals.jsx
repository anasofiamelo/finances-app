import { useState } from "react";
import { AddGoal } from "../../components";

const Goals = (props) => {
  const [showNewGoalModal, setShowNewGoalModal] = useState(false);

  const showNewGoalModalHandler = () => {
    setShowNewGoalModal((prev) => !prev);
  };
  const hideNewGoalModalHandler = () => {
    setShowNewGoalModal(false);
  };

  return (
    <div>
      <button onClick={showNewGoalModalHandler}>Add new goal</button>
      {showNewGoalModal && <AddGoal onClose={hideNewGoalModalHandler} />}
    </div>
  );
};

export default Goals;
