import moment from "moment";

export const calcDateOfCharge = (creditCard, invoice) => {
  const { cardClosureDate } = creditCard;
  const { boughtIn } = invoice;
  const dayPurchased = moment(boughtIn).date();

  const closureDayBiggerThanPurchaseDay = cardClosureDate > dayPurchased;
  const purchaseDayBiggerThanClosureDay = cardClosureDate < dayPurchased;
  const purchaseDayHasTwoDigits = dayPurchased.toString().length === 2;
  const purchaseDayHasOneDigit = dayPurchased.toString().length === 1;

  if (closureDayBiggerThanPurchaseDay && purchaseDayHasTwoDigits) {
    return moment(boughtIn);
  }

  if (closureDayBiggerThanPurchaseDay && purchaseDayHasOneDigit) {
    return moment(boughtIn).add(1, "months");
  }

  if (purchaseDayBiggerThanClosureDay) {
    return moment(boughtIn).add(1, "months");
  }
};

export const calcDateOfEnd = (invoice, chargedIn) => {
  const { timesPurchased } = invoice;

  return moment(chargedIn).add(timesPurchased - 1, "months");
};

const formatParcels = (invoice, creditCard) => {
  const { timesPurchased } = invoice;

  const chargedIn = calcDateOfCharge(creditCard, invoice);

  const endsIn = calcDateOfEnd(invoice, chargedIn);

  const formattedChargeMonth = chargedIn.format("MMM");
  const formattedEndMonth = endsIn.format("MMM");

  return `${timesPurchased}x (${formattedChargeMonth}/${formattedEndMonth})`;
};

export default formatParcels;

// const thisMonth =
//   today > foundCreditCard.cardDueDay ? moment() : moment().add(1, "months");

//_______________________________________________________________________________;
//SEMPRE AGORA/COMPRA ; OUTUBRO/AGOSTO; COMPREI: DEZEMBRO AGORA: MARÇO 2 - 11 = -9
// if(numero < 0) 12 + numero = result
//_______________________________________________________________________________;

//SEMPRE AGORA/COMPRA ; MARÇO/DEZEMBRO; AGORA: MARÇO COMPREI: DEZEMBRO  2 - 11 = -9
// if(numero < 0) 12 + numero = result
//_______________________________________________________________________________;

//_______________________________________________________________________________;
//SEMPRE AGORA/TERMINA ; MARÇO/SETEMBRO; COMPREI: DEZEMBRO AGORA: MARÇO! 2 - 11 = -9
// if(numero < 0) 12 + numero = result
//_______________________________________________________________________________;
