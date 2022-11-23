import { Modal, ButtonWithIcon } from "..";
import { useState } from "react";
import { Icon } from "@iconify/react";

import SelectedBudgetOptionCard from "./SelectedBudgetOptionCard";
import ConfigureBudgetFormFirstStep from "./ConfigureBudgetFormFirstStep";

const ConfigureBudgetModal = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showSelectedOptionsCard, setShowSelectedOptionsCard] = useState(false);

  const handleChangeSelectedOptions = (item) => setSelectedOptions(item);

  const handleButtonClick = () => setShowSelectedOptionsCard((prev) => !prev);

  const secondFormStep = (
    <>
      {selectedOptions.map((option) => (
        <SelectedBudgetOptionCard {...option} />
      ))}

      <div className="row space-between">
        <ButtonWithIcon
          buttonIcon={<Icon icon="material-symbols:arrow-back-ios-rounded" />}
          iconPosition="left"
          className="modal_action-button"
          onClick={handleButtonClick}
        >
          Back
        </ButtonWithIcon>

        <ButtonWithIcon
          buttonIcon={<Icon icon="line-md:confirm" />}
          iconPosition="right"
          className="modal_action-button"
          onClick={handleButtonClick}
        >
          Confirm
        </ButtonWithIcon>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      <h2 className="modal_title">Configure your budget</h2>
      {!showSelectedOptionsCard ? (
        <ConfigureBudgetFormFirstStep
          onChangeSelectedOptions={handleChangeSelectedOptions}
          onNextButtonClick={handleButtonClick}
        />
      ) : (
        secondFormStep
      )}
    </Modal>
  );
};

export default ConfigureBudgetModal;
