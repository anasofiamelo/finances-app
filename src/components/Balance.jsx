import { Transaction, Container } from "../components";
import { useTransactions } from "../context/finances.context";
import { BsReception3, BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";

const Balance = () => {
  const { transactions, totalBalance, totalIncomes, totalExpenses } =
    useTransactions();

  return (
    <>
      <div className="balance_grid">
        <Container>
          <div className="column">
            <h3 className="subtitle space-between">
              Current balance
              <span>
                <BsReception3
                  style={{
                    borderBottom: "1px solid var(--blue)",
                    color: "var(--blue)",
                  }}
                />
              </span>
            </h3>
            <h2 className="subtitle">$ {totalBalance}</h2>
          </div>
        </Container>

        <Container>
          <div className="column">
            <h3 className="subtitle space-between">
              Incomes
              <span>
                <BsArrowUpRight
                  style={{
                    borderBottom: "1px solid var(--green)",
                    color: "var(--green)",
                  }}
                />
              </span>
            </h3>
            <h2 className="subtitle">$ {totalIncomes}</h2>
          </div>
        </Container>

        <Container>
          <div className="column">
            <h3 className="subtitle space-between">
              Expenses
              <span>
                <BsArrowDownLeft
                  style={{
                    borderBottom: "1px solid var(--red)",
                    color: "var(--red)",
                  }}
                />
              </span>
            </h3>
            <h2 className="subtitle">$ {totalExpenses}</h2>
          </div>
        </Container>
      </div>

      <Transaction
        balanceType="Balance"
        transactions={transactions}
        balanceThead={["Category", "Description", "Value", "Date"]}
      />
    </>
  );
};

export default Balance;
