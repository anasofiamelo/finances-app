import { AddTransaction } from "..";

const typeofExpenses = ["Comida", "Conta", "Fatura"];

const AddExpense = (props) => {
  return (
    <AddTransaction
      onClose={props.onClose}
      transactionType="expense"
      typesOfTransactions={typeofExpenses}
    />
  );
};

export default AddExpense;
