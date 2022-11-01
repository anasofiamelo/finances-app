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
          <p className="title_number">$ {props.value}</p>
        </div>
      </Container>
    </Link>
  );
};
export default TransactionValueCard;
