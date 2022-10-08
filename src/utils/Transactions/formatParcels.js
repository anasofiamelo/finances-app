import moment from "moment";
const formatParcels = (invoice, creditCard) => {
  const { timesPurchased, purchasedIn } = invoice;
  const today = moment().date();
  const dayPurchased = moment(purchasedIn).date();

  const chargedIn =
    creditCard.cardClosureDate > dayPurchased
      ? moment(purchasedIn).add(1, "months")
      : moment(purchasedIn);

  // const thisMonth =
  //   today > foundCreditCard.cardDueDay ? moment() : moment().add(1, "months");

  //_______________________________________________________________________________;
  //SEMPRE AGORA/COMPRA ; OUTUBRO/AGOSTO; COMPREI: DEZEMBRO AGORA: MARÇO 2 - 11 = -9
  // if(numero < 0) 12 + numero = result
  //_______________________________________________________________________________;

  const endsIn = moment(chargedIn).add(timesPurchased, "months").format("MMM");

  return `${timesPurchased}x (${chargedIn.format("MMM")}/${endsIn})`;
};

export default formatParcels;
