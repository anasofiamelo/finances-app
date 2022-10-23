import moment from "moment";

const creditCard = "";

export const formatInvoices = (creditCard) => {
  return creditCard.invoices.map((invoice) => {
    const { value, timesPurchased } = invoice;
    const parcelValue = (value / timesPurchased).toFixed(2);
    const chargeDate = calcDateOfCharge(creditCard, invoice);
    const endDate = calcDateOfEnd(invoice, chargeDate);

    const currentMonth = moment().month();
    const paidParcels = currentMonth - chargeDate.month();
    const missingValue = (timesPurchased - paidParcels) * parcelValue;
    const paidFromTotal = `${paidParcels}/${timesPurchased}`;

    return {
      ...invoice,
      chargeDate,
      endDate,
      parcelValue,
      paidFromTotal,
      missingValue,
    };
  });
};

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

export const formatParcels = (invoice, creditCard) => {
  const { timesPurchased } = invoice;

  const chargedIn = calcDateOfCharge(creditCard, invoice);

  const endsIn = calcDateOfEnd(invoice, chargedIn);

  const formattedChargeMonth = chargedIn.format("MMM");
  const formattedEndMonth = endsIn.format("MMM");

  return `${timesPurchased}x (${formattedChargeMonth}/${formattedEndMonth})`;
};

export default creditCard;
