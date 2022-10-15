import { useContext, createContext, useState } from "react";
import { userCards } from "../utils";

const CreditCardContext = createContext({});

export const CreditCardContextProvider = (props) => {
  const [cards, setCards] = useState(userCards);
  console.log(cards);

  function addCardHandler(card) {
    setCards((prev) => [...prev, card]);
  }

  function addInvoiceToCreditCard(cardName, invoice) {
    let cardInvoices = getCardInvoices(cardName);
    cardInvoices = [...cardInvoices, invoice];
    setCards((cards) => {
      return cards.map((card) => {
        if (card.cardName === cardName) {
          return { ...card, invoices: cardInvoices };
        }
        return card;
      });
    });
  }

  function getCard(cardName) {
    return cards.find((card) => card.cardName === cardName);
  }

  function getCardInvoices(cardName) {
    const teste = getCard(cardName);
    return teste.invoices;
  }

  return (
    <CreditCardContext.Provider
      value={{ cards, addCardHandler, getCard, addInvoiceToCreditCard }}
    >
      {props.children}
    </CreditCardContext.Provider>
  );
};

export const useCreditCard = () => {
  return useContext(CreditCardContext);
};

export default CreditCardContext;
