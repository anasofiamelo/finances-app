import { useState } from "react";
import { InputLabel, AddContainer } from "../../components";
import { useCreditCard } from "../../context/credit_card.context";

const AddCreditCardModal = (props) => {
  const creditCardContext = useCreditCard();

  const [limit, setLimit] = useState(0);
  const [name, setName] = useState();
  const [closureDate, setClosureDate] = useState();
  const [dueDate, setDueDate] = useState();

  const changeLimitValueHandler = (e) => setLimit(Number(e.target.value));
  const changeNameValueHandler = (e) => setName(e.target.value);
  const changeClosureDateValueHandler = (e) => setClosureDate(e.target.value);
  const changeDueDateValueHandler = (e) => setDueDate(e.target.value);

  const submitNewCardFormHandler = (e) => {
    e.preventDefault();

    if (limit <= 0) return;

    const newCard = {
      cardLimit: limit,
      cardName: name,
      cardClosureDay: closureDate,
      cardDueDay: dueDate,
    };

    creditCardContext.addCard(newCard);
    props.onClose();
  };

  return (
    <AddContainer
      onClose={props.onClose}
      onSubmitAddForm={submitNewCardFormHandler}
      title="Add Credit Card"
      submitButtonText="Add credit card"
    >
      <InputLabel
        onChange={changeLimitValueHandler}
        value={limit}
        placeholder="0.00"
        label="Limit"
        type="number"
      />

      <InputLabel
        onChange={changeNameValueHandler}
        value={name}
        placeholder="Nubank..."
        label="Name"
        type="text"
      />

      <InputLabel
        onChange={changeClosureDateValueHandler}
        value={closureDate}
        label="Closure Date"
        placeholder="Day 27"
        type="number"
        min="1"
        max="31"
      />

      <InputLabel
        onChange={changeDueDateValueHandler}
        value={dueDate}
        label="Due Date"
        placeholder="Day 04"
        type="number"
        min="1"
        max="31"
      />
    </AddContainer>
  );
};

export default AddCreditCardModal;
