import { useContext, createContext, useState } from "react";
import { userCards, formatCardsInvoices } from "../utils";

const CreditCardContext = createContext({});

export const CreditCardContextProvider = (props) => {
  const formattedCards = formatCardsInvoices(userCards);
  const [cards, setCards] = useState(formattedCards);

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
    const card = getCard(cardName);
    return card.invoices;
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
