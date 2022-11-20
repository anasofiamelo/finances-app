import { Modal } from "..";
import { typeofExpenses } from "../../utils";
import Select from "react-select";

const options = [
  { id: 1, label: "a" },
  { id: 2, label: "b" },
  { id: 3, label: "c" },
];

const ConfigureBudgetModal = (props) => {
  const expensesOptions = typeofExpenses.map((expenseType) => {
    return { label: expenseType, options };
  });

  return (
    <Modal onClose={props.onClose}>
      <h2 className="modal_title">Configure new budget</h2>
      <Select options={expensesOptions} />
    </Modal>
  );
};

export default ConfigureBudgetModal;
