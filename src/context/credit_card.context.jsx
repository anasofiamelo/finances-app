import { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import { formatCardsInvoices } from "../utils";
import { getDocs, getDoc, doc, collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase_config";
import { useAuth } from "./auth.context";
import { useCallback } from "react";

const CreditCardContext = createContext({});

export const CreditCardContextProvider = (props) => {
  const { currentUserId } = useAuth();
  const [userCards, setUserCards] = useState([]);

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

  async function getCardsTotalInvoices(selectedDate) {
    const cardsWithInvoices = [];

    for (const card of userCards) {
      const invoices = await getCardInvoices(card.cardId);
      cardsWithInvoices.push({ ...card, invoices });
    }

    if (cardsWithInvoices.length) {
      return formatCardsInvoices(cardsWithInvoices, selectedDate);
    }

    return [];
  }

  async function addCard(docRef) {
    try {
      await addDoc(
        collection(db, "users", currentUserId, "credit-cards"),
        docRef
      );
    } catch (error) {
      console.log("error", error);
    }
  }

  async function addInvoiceToCard(cardId, docRef) {
    try {
      const teste = await addDoc(
        collection(db, "users", currentUserId, "credit-cards", cardId, docRef)
      );
      console.log("teste", teste);
    } catch (error) {
      console.log("error", error);
    }
  }

  const getCurrentUserCards = useCallback(async () => {
    const cards = await getDocs(
      collection(db, "users", currentUserId, "credit-cards")
    );
    const cardsData = cards.docs.map((doc) => ({
      cardId: doc.id,
      ...doc.data(),
    }));
    setUserCards(cardsData);
  }, [currentUserId]);

  useEffect(() => {
    getCurrentUserCards();
  }, [getCurrentUserCards]);

  return (
    <CreditCardContext.Provider
      value={{
        userCards,
        getCardInvoices,
        getCard,
        addCard,
        addInvoiceToCard,
        getCardsTotalInvoices,
      }}
    >
      {props.children}
    </CreditCardContext.Provider>
  );
};

export const useCreditCard = () => {
  return useContext(CreditCardContext);
};

export default CreditCardContext;
