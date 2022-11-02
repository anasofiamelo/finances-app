import { Link } from "react-router-dom";
import { Container } from "../../components";

const TransactionValueCard = (props) => {
  return (
    <Link to={props.goto}>
      <Container backgroundColor={props.backgroundColor || "var(--white)"}>
        <div
          className="column"
          style={{ color: props.color || "var(--dark-black)" }}
        >
          <h2
            style={{ width: "100%", color: props.color || "var(--dark-black)" }}
            className="subtitle space-between"
          >
            {props.title}
            <span style={{ color: props.color || "var(--dark-black)" }}>
              {props.icon}
            </span>
          </h2>
          <p
            style={{ color: props.color || "var(--dark-black)" }}
            className="title_number"
          >
            $ {props.value}
          </p>
        </div>
      </Container>
    </Link>
  );
};
export default TransactionValueCard;
