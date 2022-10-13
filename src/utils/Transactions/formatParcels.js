import moment from "moment";

const formatParcels = (invoice, creditCard) => {
  const { cardClosureDate } = creditCard;
  const { timesPurchased, purchasedIn } = invoice;
  const dayPurchased = moment(purchasedIn).date();

  const chargedIn = () => {
    const closureDayBiggerThanPurchaseDay = cardClosureDate > dayPurchased;
    const purchaseDayBiggerThanClosureDay = cardClosureDate < dayPurchased;
    const purchaseDayHasTwoDigits = dayPurchased.toString().length === 2;
    const purchaseDayHasOneDigit = dayPurchased.toString().length === 1;

    if (closureDayBiggerThanPurchaseDay && purchaseDayHasTwoDigits) {
      return moment(purchasedIn);
    }
    if (closureDayBiggerThanPurchaseDay && purchaseDayHasOneDigit) {
      return moment(purchasedIn).add(1, "months");
    }

    if (purchaseDayBiggerThanClosureDay) {
      return moment(purchasedIn).add(1, "months");
    }
  };

  const endsIn = moment(chargedIn())
    .add(timesPurchased - 1, "months")
    .format("MMM");

  const formattedChargeMonth = chargedIn().format("MMM");

  return `${timesPurchased}x (${formattedChargeMonth}/${endsIn})`;
};

export default formatParcels;

// const thisMonth =
//   today > foundCreditCard.cardDueDay ? moment() : moment().add(1, "months");

//_______________________________________________________________________________;
//SEMPRE AGORA/COMPRA ; OUTUBRO/AGOSTO; COMPREI: DEZEMBRO AGORA: MARÇO 2 - 11 = -9
// if(numero < 0) 12 + numero = result
//_______________________________________________________________________________;
