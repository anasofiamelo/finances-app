import { Modal } from "../..";
import moment from "moment";

const Invoice = (props) => {
  const { invoice } = props;
  const { boughtIn, chargeDate, endDate } = invoice;

  const formattedInvoiceDate = moment(boughtIn).format("MMMM, YYYY");
  const formattedChargeDate = chargeDate.format("MMMM, YYYY");
  const formattedEndDate = endDate.format("MMMM, YYYY");

  return (
    <>
      <Modal onClose={props.onClose}>
        <div style={{ width: "100%" }}>
          <h2 className="subtitle">{invoice.item}</h2>
          <p>Bought in: {formattedInvoiceDate}</p>
          <p>Charged in: {formattedChargeDate}</p>
          <p>Ends in: {formattedEndDate}</p>
        </div>
      </Modal>
    </>
  );
};

export default Invoice;
