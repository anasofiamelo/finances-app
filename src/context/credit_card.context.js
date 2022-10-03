import { useContext, createContext, useState } from "react";
import { userCards } from "../utils";

const CreditCardContext = createContext({});

export const CreditCardContextProvider = (props) => {
  const [cards, setCards] = useState(userCards);

  function addCardHandler(card) {
    setCards((prev) => [...prev, card]);
  }

  function getCardInvoice(cardTitle) {
    return cards.filter((card) => card.creditCard === cardTitle);
  }

  return (
    <CreditCardContext.Provider
      value={{ cards, addCardHandler, getCardInvoice }}
    >
      {props.children}
    </CreditCardContext.Provider>
  );
};

export const useCreditCard = () => {
  return useContext(CreditCardContext);
};

export default CreditCardContext;
