import { useEffect } from "react";
import { useContext, createContext, useState } from "react";
// import { formatCardsInvoices } from "../utils";
import { getDocs, getDoc, doc, collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase_config";
import { useAuth } from "./auth.context";

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
    <CreditCardContext.Provider
      value={{ userCards, getCardInvoices, getCard, addCard, addInvoiceToCard }}
    >
      {props.children}
    </CreditCardContext.Provider>
  );
};

export const useCreditCard = () => {
  return useContext(CreditCardContext);
};

export default CreditCardContext;
