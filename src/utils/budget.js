const budget = [
  {
    category: "Salary",
    year: 2022,
    value: 3791.66,
  },
  {
    category: "Supermarket",
    year: 2022,
    value: -300,
  },
];

export const totalBudget = (year) =>
  budget
    .filter((opt) => opt.year === year)
    .map((opt) => opt.value * 12)
    .reduce((prev, curr) => prev + curr, 0);

export default budget;
