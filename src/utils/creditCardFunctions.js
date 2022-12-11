import moment from "moment";

const creditCard = "";

export const formatCardsInvoices = (creditCards, selectedDate) => {
  return creditCards
    .map((card) => {
      const formattedInvoices = formatInvoices(card, selectedDate);
      const invoicesTotalValue =
        formattedInvoices.reduce((prev, curr) => prev + curr.parcelValue, 0) *
        -1;

      return {
        transacId: card.cardId,
        type: "Credit card invoice",
        value: invoicesTotalValue,
        description: `${card.cardName} Invoice`,
        payment: "Cash",
        date: moment(
          `${selectedDate.month}/${card.cardClosureDay}/${selectedDate.year}`
        ),
      };
    })
    .filter((card) => card.value !== 0);
};

export const formatInvoices = (creditCard, selectedDate) => {
  return creditCard.invoices.map((invoice) => {
    const { value, timesPurchased, boughtIn } = invoice;
    invoice.boughtInDate = moment(boughtIn.toDate());
    const parcelValue = (value / timesPurchased).toFixed(2);
    const chargeDate = calcDateOfCharge(creditCard, invoice);
    const endDate = calcDateOfEnd(invoice, chargeDate);

    const paidParcels = selectedDate.month - chargeDate.month();
    const missingValue = (timesPurchased - paidParcels) * parcelValue;
    const paidFromTotal = `${paidParcels}/${timesPurchased}`;

    if (paidParcels === 0 || paidParcels < 0 || paidParcels > timesPurchased) {
      return {};
    }

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

export const calcDateOfCharge = (creditCard, invoice) => {
  const { cardClosureDay } = creditCard;
  const { boughtInDate } = invoice;

  const dayPurchased = boughtInDate.date();

  const purchasedAfterClosureDay = cardClosureDay < dayPurchased;
  const purchaseDayHasOneDigit = dayPurchased.toString().length < 2;
  const closureDayHasOneDigit = cardClosureDay.toString().length < 2;

  if (
    closureDayHasOneDigit &&
    purchaseDayHasOneDigit &&
    !purchasedAfterClosureDay
  ) {
    return boughtInDate.subtract(1, "months");
  }

  return boughtInDate;
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
