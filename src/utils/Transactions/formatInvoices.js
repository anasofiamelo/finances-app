import { calcDateOfCharge, calcDateOfEnd } from "./formatParcels";

const formatInvoices = (creditCard) => {
  return creditCard.invoices.map((invoice) => {
    const { value, timesPurchased } = invoice;
    const parcelValue = (value / timesPurchased).toFixed(2);
    const chargeDate = calcDateOfCharge(creditCard, invoice);
    const endDate = calcDateOfEnd(invoice, chargeDate);
    return { ...invoice, chargeDate, endDate, parcelValue };
  });
};

export default formatInvoices;
