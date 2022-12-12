import { Button } from "../../";
import { Icon } from "@iconify/react";
import DeleteInvoiceModal from "./DeleteInvoiceModal";
import { useState } from "react";

const InvoiceTr = (props) => {
  const { invoice } = props;
  const { item, boughtInDate, parcelValue, paidFromTotal } = invoice;
  const formattedDate = boughtInDate.format("DD/MM/YYYY");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showDeleteModalHandler = () => setShowDeleteModal(true);
  const closeDeleteModalHandler = () => setShowDeleteModal(false);

  return (
    <>
      <tr>
        <td>{formattedDate}</td>
        <td>
          {item} ({paidFromTotal})
        </td>
        <td style={{ fontWeight: "500", color: "var(--red)" }}>
          $ {parcelValue}
        </td>
        <td>
          <Button className="edit-icon">
            <Icon icon="material-symbols:edit-outline-sharp" />
          </Button>
          <Button onClick={showDeleteModalHandler} className="delete-icon">
            <Icon icon="ic:outline-delete-outline" />
          </Button>
        </td>
      </tr>
      {showDeleteModal && (
        <DeleteInvoiceModal
          invoice={invoice}
          onClose={closeDeleteModalHandler}
        />
      )}
    </>
  );
};

export default InvoiceTr;
