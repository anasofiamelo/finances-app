import { Modal } from "../../../components";
import moment from "moment";

const CreditCardInvoice = (props) => {
  const { invoice } = props;
  const { item, boughtIn, timesPurchased, value } = invoice;

  const formattedInvoiceDate = moment(boughtIn).format("MMMM, YYYY");

  return (
    <>
      <Modal onClose={props.onClose}>
        <div style={{ width: "100%" }}>
          <h2 className="subtitle">{invoice.item}</h2>
          <p>Bought in: {formattedInvoiceDate}</p>
          <p>Bought in: {formattedInvoiceDate}</p>
        </div>
      </Modal>
    </>
  );
};

export default CreditCardInvoice;
