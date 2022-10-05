import { Container } from "../../components";
import moment from "moment";
const CreditCardCard = (props) => {
  return (
    <Container>
      <h3 className="subtitle">{props.cardName}</h3>
      <p>Limit: $ {props.cardLimit.toFixed(2)}</p>
      <p>Closure date: {moment(props.cardClosureDate).format("MMMM, DD")}</p>
    </Container>
  );
};

export default CreditCardCard;
