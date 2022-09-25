import { AddTransaction } from "..";

const typeofExpenses = ["Comida", "Contas", "Fatura"];

const AddExpense = (props) => {
  return (
    <>
      <AddTransaction
        onClose={props.onClose}
        transactionType="expense"
        typesOfTransactions={typeofExpenses}
      />
    </>
  );
};

export default AddExpense;
