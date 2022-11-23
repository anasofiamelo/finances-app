import { useState } from "react";
import {
  Container,
  Button,
  BudgetTable,
  ConfigureBudgetModal,
} from "../components";

const Budget = (props) => {
  const [showConfigureModal, setShowConfigureModal] = useState(false);
  const openConfigureModalHandler = () => setShowConfigureModal(true);
  const hideConfigureModalHandler = () => setShowConfigureModal(false);

  return (
    <Container>
      <div className="budget_header space-between">
        <h2 className="title">Budget</h2>
        <Button onClick={openConfigureModalHandler}>Configure budget</Button>
      </div>
      <BudgetTable />
      {showConfigureModal && (
        <ConfigureBudgetModal onClose={hideConfigureModalHandler} />
      )}
    </Container>
  );
};

export default Budget;
