import { Container } from "../../components";

const CreditCardLimit = (props) => {
  const { creditCard } = props;
  const { cardLimit, usedLimit } = creditCard;
  const availableLimit = (cardLimit - usedLimit).toFixed(2);

  return (
    <>
      <Container>
        <h2 className="title space-between">
          <span>Used limit</span>
          <span style={{ color: "var(--red)" }}>$ {creditCard.usedLimit}</span>
        </h2>

        <h3 className="title space-between">
          <span>Available limit</span>
          <span style={{ color: "var(--green)" }}>$ {availableLimit}</span>
        </h3>

        <div style={{ marginTop: "1rem", float: "right" }}></div>
      </Container>
    </>
  );
};

export default CreditCardLimit;
