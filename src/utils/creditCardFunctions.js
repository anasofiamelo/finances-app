import moment, { months } from "moment";

const creditCard = "";

export const formatInvoices = (invoices, selectedDate) => {
  return invoices.map((invoice) => {
    console.log("to aki");
    const { value, timesPurchased } = invoice;
    const parcelValue = (value / timesPurchased).toFixed(2);
    // const chargeDate = calcDateOfCharge(creditCard, invoice);
    // const endDate = calcDateOfEnd(invoice, chargeDate);

    // const paidParcels = selectedDate.month - chargeDate.month();
    // const missingValue = (timesPurchased - paidParcels) * parcelValue;
    // const paidFromTotal = `${paidParcels}/${timesPurchased}`;

    // if (paidParcels === 0 || paidParcels < 0 || paidParcels > timesPurchased) {
    // return {};
    // }

    return {
      ...invoice,
      // chargeDate,
      // endDate,
      parcelValue,
      // paidFromTotal,
      // missingValue,
    };
  });
};

// export const formatInvoices = (
//   creditCard,
//   selectedDate = { month: moment().month() }
// ) => {
//   return creditCard.invoices.map((invoice) => {
//     const { value, timesPurchased } = invoice;
//     const parcelValue = (value / timesPurchased).toFixed(2);
//     const chargeDate = calcDateOfCharge(creditCard, invoice);
//     const endDate = calcDateOfEnd(invoice, chargeDate);

//     const paidParcels = selectedDate.month - chargeDate.month();
//     const missingValue = (timesPurchased - paidParcels) * parcelValue;
//     const paidFromTotal = `${paidParcels}/${timesPurchased}`;

//     if (paidParcels === 0 || paidParcels < 0 || paidParcels > timesPurchased) {
//       return {};
//     }

//     return {
//       ...invoice,
//       chargeDate,
//       endDate,
//       parcelValue,
//       paidFromTotal,
//       missingValue,
//     };
//   });
// };

export const calcUsedLimit = (invoices) =>
  invoices.reduce((prev, current) => prev + current.missingValue, 0).toFixed(2);

export const formatCardsInvoices = (creditCards) => {
  return creditCards.map((creditCard) => {
    const invoices = formatInvoices(creditCard);
    const usedLimit = calcUsedLimit(invoices);
    return { ...creditCard, invoices, usedLimit };
  });
};

export const calcDateOfCharge = (creditCard, invoice) => {
  const { cardClosureDate } = creditCard;
  const { boughtIn } = invoice;
  const dayPurchased = moment(boughtIn).date();

  const purchasedAfterClosureDay = cardClosureDate < dayPurchased;
  const purchaseDayHasOneDigit = dayPurchased.toString().length < 2;
  const closureDayHasOneDigit = cardClosureDate.toString().length < 2;

  if (
    closureDayHasOneDigit &&
    purchaseDayHasOneDigit &&
    !purchasedAfterClosureDay
  ) {
    return moment(boughtIn).subtract(1, "months");
  }

  return moment(boughtIn);
};

export const calcDateOfEnd = (invoice, chargedIn) => {
  const { timesPurchased } = invoice;

  return moment(chargedIn).add(timesPurchased - 1, "months");
};

export const formatParcels = (invoice, creditCard) => {
  const { timesPurchased } = invoice;

  const chargedIn = calcDateOfCharge(creditCard, invoice);

  const endsIn = calcDateOfEnd(invoice, chargedIn);

  const formattedChargeMonth = chargedIn.format("MMM");
  const formattedEndMonth = endsIn.format("MMM");

  return `${timesPurchased}x (${formattedChargeMonth}/${formattedEndMonth})`;
};

export default creditCard;
