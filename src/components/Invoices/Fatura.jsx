import { NavLink } from "react-router-dom";
import { userCards } from "../../utils";

const creditCards = userCards.map((card) => card.creditCard);
const mappedCreditCards = creditCards.map((card) => (
  <NavLink
    style={{ marginRight: "1rem" }}
    key={card}
    to={`/credit-card/${card}`}
  >
    {card}
  </NavLink>
));

const Fatura = (props) => {
  return (
    <div>
      <h2>Your credit card list</h2>
      {mappedCreditCards}
    </div>
  );
};

export default Fatura;
