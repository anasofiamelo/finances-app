import { useState, useEffect } from "react";
import {
  Container,
  Table,
  ThWithSort,
  CreditCardInvoice,
  Button,
  AddInvoiceModal,
  MonthSwitch,
} from "../..";
import { current, formatInvoices } from "../../../utils";
import moment from "moment";
import { BsFillPlusCircleFill } from "react-icons/bs";

const InvoicesList = (props) => {
  const { creditCard } = props;
  const { invoices } = creditCard;
  const { fullMonth } = current;

  const [sortedInvoices, setSortedInvoices] = useState(invoices);
  const [detailedInvoice, setDetailedInvoice] = useState(null);
  const [showAddPurchaseModal, setShowAddPurchaseModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(current.month);

  const showAddCreditCardPurchaseHandler = () => {
    setShowAddPurchaseModal(true);
  };
  const hideAddCreditCardPurchaseHandler = () => {
    setShowAddPurchaseModal(false);
  };

  const showDetailedInvoiceHandler = (event) => {
    const itemName = event.target.parentElement.id;
    const invoice = invoices.find((invoice) => invoice.item.includes(itemName));
    setDetailedInvoice(invoice);
  };

  useEffect(() => {
    const formattedInvoices = formatInvoices(creditCard, selectedMonth).filter(
      (invoice) => Object.keys(invoice).length > 0
    );
    setSortedInvoices(formattedInvoices);
  }, [invoices, selectedMonth, creditCard]);

  const hideDetailedInvoiceHandler = () => setDetailedInvoice(null);

  const mappedFatura = sortedInvoices.map((invoice) => {
    const { item, boughtIn, parcelValue, paidFromTotal } = invoice;
    const formattedDate = moment(boughtIn).format("DD/MM/YYYY");
    const valueStyle = { fontWeight: "500", color: "var(--red)" };

    return (
      <tr onClick={showDetailedInvoiceHandler} key={item} id={item}>
        <td>{formattedDate}</td>
        <td>
          {item} ({paidFromTotal})
        </td>
        <td style={valueStyle}>$ {parcelValue}</td>
      </tr>
    );
  });

  const changeInvoicesHandler = (invoices) => {
    setSortedInvoices(invoices);
  };

  const changeSelectedMonthHandler = (value) => {
    setSelectedMonth(value);
  };

  const total = sortedInvoices.reduce(
    (prev, current) => prev + +current.parcelValue,
    0
  );

  return (
    <Container>
      <div className="space-between">
        <h2 className="subtitle" style={{ marginBottom: "1rem" }}>
          Invoices of {fullMonth}
        </h2>
        <Button
          buttonIcon={<BsFillPlusCircleFill />}
          onClick={showAddCreditCardPurchaseHandler}
        >
          New invoice
        </Button>
      </div>

      <div className="row" style={{ justifyContent: "center" }}>
        <MonthSwitch onChangeSelectedMonth={changeSelectedMonthHandler} />
      </div>

      {showAddPurchaseModal && (
        <AddInvoiceModal
          onClose={hideAddCreditCardPurchaseHandler}
          {...creditCard}
        />
      )}
      <Table
        thead={
          <>
            <ThWithSort
              comparableKey="boughtIn"
              sortedList={invoices}
              onToggle={changeInvoicesHandler}
            >
              Date
            </ThWithSort>
            <th>Description</th>
            <th>Value</th>
          </>
        }
      >
        {mappedFatura}
      </Table>

      {detailedInvoice && (
        <CreditCardInvoice
          onClose={hideDetailedInvoiceHandler}
          invoice={detailedInvoice}
        />
      )}
      <h3>
        {" "}
        Total <span style={{ color: "var(--red)" }}>$ {total.toFixed(2)}</span>
      </h3>
    </Container>
  );
};

export default InvoicesList;
