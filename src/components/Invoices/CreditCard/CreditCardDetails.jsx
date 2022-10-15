import { Container, CreditCardLimit } from "../../../components";
import { BsCreditCard } from "react-icons/bs";

const CreditCardDetails = (props) => {
  const { creditCard } = props;
  const { cardName, cardLimit } = creditCard;

  return (
    <>
      <Container>
        <div className="space-between">
          <div className="row">
            <BsCreditCard
              className="button-icon"
              style={{ marginRight: "1rem", color: "var(--blue)" }}
            />

            <h2 style={{ width: "fit-content" }} className="subtitle">
              {cardName}
            </h2>
          </div>

          <h3 style={{ width: "fit-content" }} className="subtitle">
            Limit of <b>${cardLimit.toFixed(2)}</b>
          </h3>
        </div>
      </Container>

      <CreditCardLimit creditCard={creditCard} />
    </>
  );
};
export default CreditCardDetails;
