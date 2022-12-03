import { Button } from "../../components";
import { BsCreditCard } from "react-icons/bs";
import { Icon } from "@iconify/react";
const CreditCardCard = (props) => {
  const iconStyleObject = { fontSize: "2.2rem", color: "var(--white)" };
  return (
    <>
      <div className="row space-between">
        <div className="column">
          <div className="row">
            <span style={{ marginRight: "1rem" }}>
              <BsCreditCard
                style={{ color: "var(--purple)", fontSize: "2.5rem" }}
              />
            </span>
            <h2 className="card_title">{props.cardName}</h2>
          </div>
          <p>Limit: $ {props.cardLimit.toFixed(2)}</p>
          <p>Closure day: {props.cardClosureDay}</p>
        </div>
        <div className="credit-card_actions row">
          <Button>
            <Icon style={iconStyleObject} icon="material-symbols:edit" />
          </Button>
          <Button>
            <Icon
              style={iconStyleObject}
              icon="material-symbols:delete-forever-rounded"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreditCardCard;
