import { useState } from "react";
import { InputLabel, AddContainer, Select } from "../..";
import { useCreditCard } from "../../../context/credit_card.context";

const AddInvoiceModal = (props) => {
  const { userCards, addInvoiceToCard } = useCreditCard();

  const [value, setValue] = useState(0);
  const [item, setItem] = useState();
  const [times, setTimes] = useState();
  const [date, setDate] = useState();
  const [creditCardId, setCreditCardId] = useState(
    props.cardId ? props.cardId : undefined
  );

  const changeValueHandler = (e) => setValue(e.target.value);
  const changeItemHandler = (e) => setItem(e.target.value);
  const changeTimesHandler = (e) => setTimes(e.target.value);
  const changeDateHandler = (e) => setDate(e.target.value);
  const changeCreditCardHandler = (e) => setCreditCardId(e.target.value);

  const submitNewPurchaseHandler = (e) => {
    e.preventDefault();

    const newPurchase = {
      boughtIn: new Date(date),
      timesPurchased: Number(times),
      item,
      value: Number(value),
    };

    if (!value) return;

    addInvoiceToCard(creditCardId, newPurchase);
    props.onClose();
  };

  const mappedCreditCards = userCards.map((card) => (
    <option value={card.cardId}>{card.cardName}</option>
  ));

  return (
    <AddContainer
      onSubmitAddForm={submitNewPurchaseHandler}
      onClose={props.onClose}
      title="New Credit Card Invoice"
      submitButtonText="Add purchase"
    >
      <Select
        label="Card"
        value={creditCardId}
        onChange={changeCreditCardHandler}
        options={mappedCreditCards}
      />

      <InputLabel
        value={value}
        onChange={changeValueHandler}
        label="Value"
        type="number"
        placeholder="0.00"
      />

      <InputLabel
        value={item}
        onChange={changeItemHandler}
        label="Item"
        placeholder="Bag..."
      />

      <InputLabel
        value={date}
        onChange={changeDateHandler}
        label="When"
        type="date"
      />

      <InputLabel
        value={times}
        onChange={changeTimesHandler}
        label="Times"
        type="number"
        placeholder="2"
      />
    </AddContainer>
  );
};

export default AddInvoiceModal;
