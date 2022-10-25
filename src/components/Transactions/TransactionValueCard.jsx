import { Link } from "react-router-dom";
import { Container } from "../../components";

const TransactionValueCard = (props) => {
  return (
    <Link to={props.goto}>
      <Container>
        <div className="column">
          <h2 style={{ width: "100%" }} className="subtitle space-between">
            {props.title}
            <span>{props.icon}</span>
          </h2>
          <h2 className="subtitle">$ {props.value}</h2>
        </div>
      </Container>
    </Link>
  );
};
export default TransactionValueCard;
