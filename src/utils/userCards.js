const userCards = [
  {
    cardLimit: 200.0,
    cardClosureDate: 28,
    cardDueDate: 4,
    cardName: "Nubank",
    invoices: [
      {
        purchasedIn: new Date("01/21/2022"),
        timesPurchased: 24,
        purchasedItem: "Bag",
        purchaseValue: 5000,
        paid: "",
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
  {
    cardLimit: 24000.0,
    cardClosureDate: 28,
    cardDueDay: 8,
    cardName: "Porto Seguro",
    invoices: [
      {
        purchasedIn: new Date("08/03/2022"),
        timesPurchased: 10,
        purchasedItem: "Ar Condicionado",
        purchaseValue: 1899,
      },
      {
        purchasedIn: new Date("03/24/2022"),
        timesPurchased: 8,
        purchasedItem: "Plano Vó",
        purchaseValue: 1675.36,
      },
    ],
  },
];
export default userCards;
