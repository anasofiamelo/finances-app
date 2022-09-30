import { useContext, createContext } from "react";

const CreditCardContext = createContext({});

export const CreditCardContextProvider = (props) => {
  return (
    <CreditCardContext.Provider value={{}}>
      {props.children}
    </CreditCardContext.Provider>
  );
};

export const useCreditCard = () => {
  return useContext(CreditCardContext);
};

export default CreditCardContext;
