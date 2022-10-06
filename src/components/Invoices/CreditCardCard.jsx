import { Container } from "../../components";
import moment from "moment";
import { BsCreditCard } from "react-icons/bs";

const CreditCardCard = (props) => {
  return (
    <Container>
      <div className="row space-between">
        <h3 className="subtitle card_subtitle">{props.cardName}</h3>
        <span>
          <BsCreditCard
            style={{ color: "var(--blue)" }}
            className="button-icon"
          />
        </span>
      </div>
      <p>Limit: $ {props.cardLimit.toFixed(2)}</p>
      <p>Closure date: {moment(props.cardClosureDate).format("MMMM, DD")}</p>
    </Container>
  );
};

export default CreditCardCard;
