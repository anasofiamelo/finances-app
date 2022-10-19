import { useState } from "react";
import { Modal, InputLabel } from "../../components";
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
      cardClosureDate: closureDate,
      cardDueDate: dueDate,
      invoices: [],
    };

    creditCardContext.addCardHandler(newCard);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitNewCardFormHandler} style={{ width: "100%" }}>
        <h2>Add Credit Card</h2>

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

        <button type="submit" style={{ float: "right" }}>
          Add Credit Card
        </button>
      </form>
    </Modal>
  );
};

export default AddCreditCardModal;