import { useState, useEffect } from "react";
import { Container, Table, ThWithSort, InvoiceTr, MonthSwitch } from "../..";

import { current, formatInvoices } from "../../../utils";

const InvoicesTable = (props) => {
  const { creditCard } = props;
  const { invoices } = creditCard;
  const { fullMonth, month, year } = current;

  const [sortedInvoices, setSortedInvoices] = useState([]);
  const [selectedDate, setSelectedDate] = useState({ month, year });

  useEffect(() => {
    const formattedInvoices =
      invoices.length > 0 ? formatInvoices(creditCard, selectedDate) : [];
    const filteredInvoices = formattedInvoices.filter(
      (invoice) => Object.keys(invoice).length > 0
    );

    setSortedInvoices(filteredInvoices);
  }, [selectedDate, creditCard, invoices, props.isLoading]);

  const changeInvoicesHandler = () => {
    setSortedInvoices();
  };
  const changeSelectedDateHandler = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const total = sortedInvoices
    .reduce((prev, current) => prev + +current.parcelValue, 0)
    .toFixed(2);

  return (
    <>
      <Container>
        <div className="space-between">
          <h2 className="title" style={{ marginBottom: "1rem" }}>
            Invoices of {fullMonth}
          </h2>
        </div>

        <div className="row" style={{ justifyContent: "center" }}>
          <MonthSwitch onChangeSelectedMonth={changeSelectedDateHandler} />
        </div>
        {!props.isLoading && (
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
            {sortedInvoices.map((invoice) => (
              <InvoiceTr invoice={invoice} key={invoice.invoiceId} />
            ))}
          </Table>
        )}

        <h3>
          Total <span style={{ color: "var(--red)" }}>$ {total}</span>
        </h3>
      </Container>
    </>
  );
};

export default InvoicesTable;
