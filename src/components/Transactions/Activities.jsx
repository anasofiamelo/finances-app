import { TransactionValueCards, Transactions } from "..";

const Activities = (props) => {
  return (
    <>
      <div className="balance_grid">
        <Transactions title={props.title} transactions={props.transactions} />
        <div className="transaction_cards">
          <TransactionValueCards />
        </div>
      </div>
    </>
  );
};

export default Activities;
