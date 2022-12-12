import { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import { formatCardsInvoices } from "../utils";
import {
  getDocs,
  getDoc,
  doc,
  collection,
  addDoc,
  Timestamp,
  deleteDoc,
} from "firebase/firestore";
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

  const getCardInvoices = useCallback(
    async (cardId) => {
      const invoices = await getDocs(
        collection(
          db,
          "users",
          currentUserId,
          "credit-cards",
          cardId,
          "invoices"
        )
      );

      const invoicesData = invoices.docs.map((doc) => ({
        invoiceId: doc.id,
        ...doc.data(),
      }));

      return invoicesData;
    },
    [currentUserId]
  );

  const deleteInvoice = useCallback(
    async (cardId, invoiceId) => {
      try {
        const invoiceRef = await doc(
          db,
          "users",
          currentUserId,
          "credit-cards",
          cardId,
          "invoices",
          invoiceId
        );
        await deleteDoc(invoiceRef);
      } catch (error) {
        console.log("error", error);
      }
    },
    [currentUserId]
  );

  const getCardsTotalInvoices = useCallback(
    async (selectedDate) => {
      const cardsWithInvoices = [];

      for (const card of userCards) {
        const invoices = await getCardInvoices(card.cardId);
        cardsWithInvoices.push({ ...card, invoices });
      }

      if (cardsWithInvoices.length) {
        return formatCardsInvoices(cardsWithInvoices, selectedDate);
      }

      return [];
    },
    [getCardInvoices, userCards]
  );

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
        collection(
          db,
          "users",
          currentUserId,
          "credit-cards",
          cardId,
          "invoices"
        ),
        {
          ...docRef,
          boughtIn: Timestamp.fromDate(docRef.boughtIn),
        }
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
        deleteInvoice,
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
