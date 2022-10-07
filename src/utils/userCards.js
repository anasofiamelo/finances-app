const userCards = [
  {
    cardLimit: 200.0,
    cardClosureDate: new Date(),
    cardDueDate: new Date(),
    cardName: "Nubank",
    invoices: [
      {
        purchasedIn: new Date("01/21/2022"),
        timesPurchased: 24,
        purchasedItem: "Bag",
        purchaseValue: 5000,
      },
      {
        purchasedIn: new Date("01/21/2022"),
        timesPurchased: 10,
        purchasedItem: "PC",
        purchaseValue: 1000,
      },
      {
        purchasedIn: new Date("01/21/2022"),
        timesPurchased: 6,
        purchasedItem: "Mega Hair",
        purchaseValue: 800,
      },
    ],
  },
];
export default userCards;
