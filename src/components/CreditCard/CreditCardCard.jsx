import { BsCreditCard } from "react-icons/bs";

const CreditCardCard = (props) => {
  return (
    <>
      <div className="row">
        <span style={{ marginRight: "1rem" }}>
          <BsCreditCard
            style={{ color: "var(--purple)", fontSize: "2.5rem" }}
          />
        </span>
        <h2 className="card_title">{props.cardName}</h2>
      </div>
      <p>Limit: $ {props.cardLimit.toFixed(2)}</p>
      <p>Closure day: {props.cardClosureDay}</p>
    </>
  );
};

export default CreditCardCard;
