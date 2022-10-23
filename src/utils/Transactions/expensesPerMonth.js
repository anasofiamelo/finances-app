export const expensesPerMonth = [
  { month: "Jan", value: 0 },
  { month: "Fev", value: 0 },
  { month: "Mar", value: 0 },
  { month: "Apr", value: 0 },
  { month: "May", value: 0 },
  { month: "Jun", value: 0 },
  { month: "Jul", value: 0 },
  { month: "Aug", value: 0 },
  { month: "Sep", value: 0 },
  { month: "Oct", value: 0 },
  { month: "Nov", value: 0 },
  { month: "Dec", value: 0 },
];

const calcExpensesPerMonth = (expenses) => {
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    expensesPerMonth[expenseMonth].value -= expense.value;
  }
  return expensesPerMonth;
};

// export const calcExpensesPerMonthPercentage = (expenses) => {
//   const calcExpenses = calcExpensesPerMonth(expenses);
//   const expensesValues = calcExpenses.map((expense) => expense.value);
//   const maxValue = Math.max(...expensesValues);
// };

export default calcExpensesPerMonth;
