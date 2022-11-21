import { Link } from "react-router-dom";
import { Container } from "../../components";

const TransactionValueCard = (props) => {
  const styleObj = {
    color: props.color || "var(--dark-black)",
  };
  return (
    <Link to={props.goto}>
      <Container style={{ ...props.style }}>
        <div className="column" style={{ ...styleObj }}>
          <h2
            style={{ width: "100%", ...styleObj }}
            className="subtitle space-between"
          >
            {props.title}
            <span style={{ ...styleObj }}>{props.icon}</span>
          </h2>
          <p style={{ ...styleObj }} className="title_number">
            $ {props.value}
          </p>
        </div>
      </Container>
    </Link>
  );
};
export default TransactionValueCard;
