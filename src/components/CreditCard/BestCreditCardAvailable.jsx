import { Container } from "../../components";

const BestCreditCardAvailable = (props) => {
  const cardsPercentages = props.cards.map((card) => {
    const { cardLimit, usedLimit } = card;
    const percentageUtilized = ((usedLimit * 100) / cardLimit).toFixed(2);
    return percentageUtilized;
  });

  return (
    <Container>
      <h3 className="subtitle">Best Card to Buy:</h3>
      <p>{}</p>
    </Container>
  );
};

export default BestCreditCardAvailable;
