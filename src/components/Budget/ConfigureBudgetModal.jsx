import { Modal, ButtonWithIcon } from "..";
import { useState } from "react";
import { Icon } from "@iconify/react";

import SelectedBudgetOptionCard from "./SelectedBudgetOptionCard";
import ConfigureBudgetFormFirstStep from "./ConfigureBudgetFormFirstStep";
import { useBudget } from "../../context/budget.context";

const ConfigureBudgetModal = (props) => {
  const { addBudget } = useBudget();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showSelectedOptionsCard, setShowSelectedOptionsCard] = useState(false);
  const handleChangeSelectedOptions = (item) => setSelectedOptions(item);

  const toggleShowSelectedOptions = () =>
    setShowSelectedOptionsCard((prev) => !prev);

  const handleBudgetFormSubmit = (event) => {
    event.preventDefault();
    selectedOptions.map((option) => addBudget(option));
  };

  const secondFormStep = (
    <>
      {selectedOptions.map((option) => (
        <SelectedBudgetOptionCard
          options={selectedOptions}
          setOptions={setSelectedOptions}
          key={option.id}
          {...option}
        />
      ))}

      <div className="row space-between">
        <ButtonWithIcon
          buttonIcon={<Icon icon="material-symbols:arrow-back-ios-rounded" />}
          iconPosition="left"
          className="modal_action-button"
          onClick={toggleShowSelectedOptions}
        >
          Back
        </ButtonWithIcon>

        <ButtonWithIcon
          type="submit"
          buttonIcon={<Icon icon="line-md:confirm" />}
          iconPosition="right"
          className="modal_action-button"
          onClick={handleBudgetFormSubmit}
        >
          Confirm
        </ButtonWithIcon>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      <form>
        <h2 className="modal_title">Configure your budget</h2>
        {!showSelectedOptionsCard ? (
          <ConfigureBudgetFormFirstStep
            onChangeSelectedOptions={handleChangeSelectedOptions}
            onNextButtonClick={toggleShowSelectedOptions}
          />
        ) : (
          secondFormStep
        )}
      </form>
    </Modal>
  );
};

export default ConfigureBudgetModal;
