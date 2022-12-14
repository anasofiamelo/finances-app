import { useState } from "react";
import {
  Container,
  ButtonWithIcon,
  BudgetTable,
  ConfigureBudgetModal,
} from "../components";
import { Icon } from "@iconify/react";

const Budget = (props) => {
  const [showConfigureModal, setShowConfigureModal] = useState(false);

  const openConfigureModalHandler = () => setShowConfigureModal(true);
  const hideConfigureModalHandler = () => setShowConfigureModal(false);

  return (
    <Container>
      <div className="budget_header space-between">
        <h2 className="title">Budget</h2>
        <ButtonWithIcon
          buttonIcon={<Icon icon="mdi:gear" />}
          onClick={openConfigureModalHandler}
        >
          Configure budget
        </ButtonWithIcon>
      </div>
      <BudgetTable />
      {showConfigureModal && (
        <ConfigureBudgetModal onClose={hideConfigureModalHandler} />
      )}
    </Container>
  );
};

export default Budget;
