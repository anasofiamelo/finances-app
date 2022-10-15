import moment from "moment";
import { calcDateOfCharge, calcDateOfEnd } from "./formatParcels";

const formatInvoices = (creditCard) => {
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

export default formatInvoices;
