import { Modal } from "../../components";
import { typeofExpenses } from "../../utils";

const ConfigureBudget = (props) => {
  console.log("typeofExpenses", typeofExpenses);
  const mappedExpenses = typeofExpenses.map((exp) => <p>{exp}</p>);
  return (
    <Modal onClose={props.onClose}>
      <h2 className="modal_title">Configure new budget</h2>
      {mappedExpenses}
    </Modal>
  );
};

export default ConfigureBudget;
