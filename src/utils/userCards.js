const userCards = [
  {
    cardLimit: 200.0,
    cardClosureDate: 24,
    cardDueDate: 4,
    cardName: "Nubank",
    invoices: [
      {
        purchasedIn: new Date("01/28/2022"),
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
        purchasedIn: new Date("01/28/2022"),
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
  {
    cardLimit: 5000,
    cardClosureDate: 4,
    cardDueDay: 12,
    cardName: "Nubank Nicholas",
    invoices: [
      {
        purchasedIn: new Date("07/01/2022"),
        timesPurchased: 3,
        purchasedItem: "Escrivaninha",
        purchaseValue: 215,
      },
      {
        purchasedIn: new Date("07/01/2022"),
        timesPurchased: 3,
        purchasedItem: "Liquidificador",
        purchaseValue: 76.38,
      },
      {
        purchasedIn: new Date("07/01/2022"),
        timesPurchased: 7,
        purchasedItem: "Comoda",
        purchaseValue: 398.65,
      },
      {
        purchasedIn: new Date("08/01/2022"),
        timesPurchased: 8,
        purchasedItem: "Oculos Sofia",
        purchaseValue: 750,
      },
    ],
  },
];
export default userCards;
