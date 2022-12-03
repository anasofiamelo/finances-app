import { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import { formatCardsInvoices } from "../utils";
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
import { db } from "../services/firebase_config";
import { useAuth } from "./auth.context";

const CreditCardContext = createContext({});

export const CreditCardContextProvider = (props) => {
  const { currentUserId } = useAuth();
  const [userCards, setUserCards] = useState([]);
  // const formattedCards = formatCardsInvoices(userCards);
  // const [cards, setCards] = useState(formattedCards);

  // function addCardHandler(card) {
  //   setCards((prev) => [...prev, card]);
  // }

  // function addInvoiceToCreditCard(cardName, invoice) {
  //   let cardInvoices = getCardInvoices(cardName);
  //   cardInvoices = [...cardInvoices, invoice];
  //   setCards((cards) => {
  //     return cards.map((card) => {
  //       if (card.cardName === cardName) {
  //         return { ...card, invoices: cardInvoices };
  //       }
  //       return card;
  //     });
  //   });
  // }

  async function getCard(cardId) {
    try {
      const card = await getDoc(
        doc(db, "users", currentUserId, "credit-cards", cardId)
      );
      return { cardId, ...card.data() };
    } catch (error) {
      console.log("error", error);
    }
  }

  async function getCardInvoices(cardId) {
    const invoices = await getDocs(
      collection(db, "users", currentUserId, "credit-cards", cardId, "invoices")
    );

    const invoicesData = invoices.docs.map((doc) => ({
      invoiceId: doc.id,
      ...doc.data(),
    }));

    return invoicesData;
  }

  useEffect(() => {
    async function getCurrentUserCards() {
      const cards = await getDocs(
        collection(db, "users", currentUserId, "credit-cards")
      );
      const cardsData = cards.docs.map((doc) => ({
        cardId: doc.id,
        ...doc.data(),
      }));
      setUserCards(cardsData);
    }
    getCurrentUserCards();
  }, [currentUserId]);

  return (
    <CreditCardContext.Provider value={{ userCards, getCardInvoices, getCard }}>
      {props.children}
    </CreditCardContext.Provider>
  );
};

export const useCreditCard = () => {
  return useContext(CreditCardContext);
};

export default CreditCardContext;
