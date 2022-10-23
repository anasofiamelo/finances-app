import { Container } from "../../components";
import { BsCreditCard } from "react-icons/bs";

const CreditCardCard = (props) => {
  return (
    <Container>
      <div className="row space-between">
        <h3 className="subtitle card_subtitle">{props.cardName}</h3>
        <span>
          <BsCreditCard
            style={{ color: "var(--purple)" }}
            className="button-icon"
          />
        </span>
      </div>
      <p>Limit: $ {props.cardLimit.toFixed(2)}</p>
      <p>Closure day: {props.cardClosureDate}</p>
    </Container>
  );
};

export default CreditCardCard;
