import { useState, useEffect } from "react";
import { Container, Table, ThWithSort, InvoiceTr, MonthSwitch } from "../..";

import { current, formatInvoices } from "../../../utils";

const InvoicesTable = (props) => {
  const { creditCard, invoices } = props;
  const { fullMonth, month, year } = current;
  const [sortedInvoices, setSortedInvoices] = useState(invoices);
  const [selectedDate, setSelectedDate] = useState({ month, year });

  useEffect(() => {
    const formattedInvoices =
      invoices.length > 0 ? formatInvoices(invoices, selectedDate) : [];
    const filteredFormattedInvoices = formattedInvoices.filter(
      (invoice) => Object.keys(invoice).length > 0
    );
    setSortedInvoices(filteredFormattedInvoices);
  }, [selectedDate, creditCard, invoices]);

  const changeInvoicesHandler = () => {
    setSortedInvoices();
  };

  const changeSelectedDateHandler = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  // const total = sortedInvoices
  //   .reduce((prev, current) => prev + +current.parcelValue, 0)
  //   .toFixed(2);

  return (
    <Container>
      <div className="space-between">
        <h2 className="title" style={{ marginBottom: "1rem" }}>
          Invoices of {fullMonth}
        </h2>
      </div>

      <div className="row" style={{ justifyContent: "center" }}>
        <MonthSwitch onChangeSelectedMonth={changeSelectedDateHandler} />
      </div>

      <Table
        thead={
          <>
            {/* <ThWithSort
              comparableKey="boughtIn"
              sortedList={invoices}
              onToggle={changeInvoicesHandler}
            >
              Date
            </ThWithSort> */}
            <th>Description</th>
            <th>Value</th>
          </>
        }
      >
        {/* {sortedInvoices.map((invoice, index) => (
          <InvoiceTr invoice={invoice} index={index} />
        ))} */}
      </Table>

      <h3>
        {/* Total <span style={{ color: "var(--red)" }}>$ {total}</span> */}
      </h3>
    </Container>
  );
};

export default InvoicesTable;
