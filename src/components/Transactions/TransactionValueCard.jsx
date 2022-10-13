import { Container } from "../../components";

const TransactionValueCard = (props) => {
  return (
    <Container>
      <div className="column">
        <h2 className="subtitle space-between">
          {props.title}
          <span>{props.icon}</span>
        </h2>
        <h2 className="subtitle">$ {props.value}</h2>
      </div>
    </Container>
  );
};
export default TransactionValueCard;
