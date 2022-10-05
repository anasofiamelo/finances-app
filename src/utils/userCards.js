const userCards = [
  {
    cardLimit: 200.0,
    cardClosureDate: new Date(),
    cardDueDate: new Date(),
    cardName: "Nubank",
    invoices: [
      {
        start: new Date("01/21/2022"),
        times: 24,
        item: "Bag",
        totalValue: 5000,
      },
      {
        start: new Date("01/21/2022"),
        times: 10,
        item: "PC",
        totalValue: 1000,
      },
      {
        start: new Date("01/21/2022"),
        times: 6,
        item: "Mega Hair",
        totalValue: 800,
      },
    ],
  },
];
export default userCards;
