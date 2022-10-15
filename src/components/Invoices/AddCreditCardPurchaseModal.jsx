import { useState } from "react";
import { BsCreditCard, BsFillPlusCircleFill } from "react-icons/bs";
import { InputLabel, Button, Modal } from "..";
import { useCreditCard } from "../../context/credit_card.context";

const AddCreditCardPurchaseModal = (props) => {
  const context = useCreditCard();

  const [value, setValue] = useState(0);
  const [item, setItem] = useState();
  const [times, setTimes] = useState();
  const [date, setDate] = useState();

  const changeValueHandler = (e) => setValue(e.target.value);
  const changeItemHandler = (e) => setItem(e.target.value);
  const changeTimesHandler = (e) => setTimes(e.target.value);
  const changeDateHandler = (e) => setDate(e.target.value);

  const submitNewPurchaseHandler = (e) => {
    e.preventDefault();
    const newPurchase = {
      boughtIn: new Date(),
      timesPurchased: Number(times),
      item: item,
      value: Number(value),
    };

    if (!value) return;

    context.addInvoiceToCreditCard(props.cardName, newPurchase);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form style={{ width: "100%" }} onSubmit={submitNewPurchaseHandler}>
        <div className="row space-between">
          <h2 className="subtitle">Add new purchase to {props.cardName}</h2>

          <span>
            <BsCreditCard
              className="button-icon"
              style={{ color: "var(--blue)" }}
            />
          </span>
        </div>

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
          placeholder="Bag"
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

        <Button
          style={{ float: "right" }}
          buttonText="Add purchase"
          buttonIcon={<BsFillPlusCircleFill />}
          type="submit"
        />
      </form>
    </Modal>
  );
};

export default AddCreditCardPurchaseModal;
