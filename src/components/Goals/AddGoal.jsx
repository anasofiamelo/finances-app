import { useState } from "react";
import { Modal, Input } from "../../components";

const goalTypes = ["House", "Car", "Custom"];
const mappedGoalTypes = goalTypes.map((goal) => (
  <option key={goal} value={goal}>
    {goal}
  </option>
));

const AddGoal = (props) => {
  const [selectedGoalType, setSelectedGoalType] = useState(goalTypes[0]);
  const [goalValue, setGoalValue] = useState(1000);

  const changeSelectedGoalTypeHandler = (event) => {
    setSelectedGoalType(event.target.value);
  };

  const changeGoalValueHandler = (event) => {
    setGoalValue(event.target.value);
  };

  return (
    <Modal onClose={props.onClose}>
      <form>
        <h1>Add new goal</h1>
        <select
          onChange={changeSelectedGoalTypeHandler}
          value={selectedGoalType}
        >
          {mappedGoalTypes}
        </select>
        <Input
          onChange={changeGoalValueHandler}
          placeholder="Goal value"
          type="number"
          value={goalValue}
        />
        {selectedGoalType === "Custom" && (
          <Input placeholder="Whats your goal?" />
        )}
        <button type="submit">Add goal</button>
      </form>
    </Modal>
  );
};

export default AddGoal;
