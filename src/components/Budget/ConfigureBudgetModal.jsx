import { Modal, Button, InputLabel } from "..";
import { budgetOptions } from "../../utils/Transactions/typeofExpenses";
import { useState } from "react";
import Select from "react-select";
import SelectedBudgetOptionCard from "./SelectedBudgetOptionCard";

const ConfigureBudgetModal = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showSelectedOptionsCard, setShowSelectedOptionsCard] = useState(false);
  // console.log("selectedOptions", selectedOptions);

  const handleChangeSelectedOptions = (item) => setSelectedOptions(item);

  const handleButtonClick = () => setShowSelectedOptionsCard((prev) => !prev);

  const shortcuts = {
    lightGreyBorder: "1px solid var(--light-grey)",
    standardFont: "var(--poppins)",
  };

  const styles = {
    control: (base) => ({
      ...base,
      fontFamily: shortcuts.standardFont,
      border: shortcuts.lightGreyBorder,
      "&:hover": { border: shortcuts.lightGreyBorder },
      boxShadow: "none",
      cursor: "pointer",
      fontSize: "1.4rem",
      padding: "0",
    }),
    option: (base) => ({
      ...base,
      fontFamily: shortcuts.standardFont,
      "&:hover": { backgroundColor: "var(--purple)", color: "var(--white)" },
      cursor: "pointer",
      fontSize: "1.3rem",
    }),
  };

  const firstFormStep = (
    <>
      <Select
        onChange={handleChangeSelectedOptions}
        isMulti
        options={budgetOptions}
        closeMenuOnSelect={false}
        styles={styles}
      />

      <div className="row space-between">
        <span
          style={{
            backgroundColor: "var(--light-grey)",
            width: "45%",
            height: "1px",
            borderRadius: "2px",
          }}
        />
        <span style={{ fontWeight: "500", fontFamily: "var(--raleway)" }}>
          or
        </span>
        <span
          style={{
            backgroundColor: "var(--light-grey)",
            width: "45%",
            height: "1px",
            borderRadius: "2px",
          }}
        />
      </div>

      <InputLabel label="CUSTOM BUDGET" />

      <Button onClick={handleButtonClick}>Next</Button>
    </>
  );

  const secondFormStep = (
    <>
      {selectedOptions.map((option) => (
        <SelectedBudgetOptionCard {...option} />
      ))}
      <Button onClick={handleButtonClick}>Back</Button>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      <h2 className="modal_title">Configure new budget</h2>
      {!showSelectedOptionsCard && firstFormStep}

      {showSelectedOptionsCard && secondFormStep}
    </Modal>
  );
};

export default ConfigureBudgetModal;
