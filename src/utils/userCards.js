const userCards = [
  {
    cardLimit: 200.0,
    cardClosureDate: 24,
    cardDueDay: 4,
    cardName: "Nubank",
    invoices: [],
  },
  {
    cardLimit: 24000.0,
    cardClosureDate: 28,
    cardDueDay: 8,
    cardName: "Porto Seguro",
    invoices: [
      {
        boughtIn: new Date("08/03/2022"),
        timesPurchased: 10,
        item: "Ar Condicionado",
        value: 1899,
      },
      {
        boughtIn: new Date("03/24/2022"),
        timesPurchased: 8,
        item: "Plano Vó",
        value: 1675.36,
      },
    ],
  },
  {
    cardLimit: 5000,
    cardClosureDate: 6,
    cardDueDay: 12,
    cardName: "Nubank Nicholas",
    invoices: [
      {
        boughtIn: new Date("08/16/2022"),
        timesPurchased: 8,
        item: "Oculos Sofia",
        value: 750,
      },
      {
        boughtIn: new Date("06/30/2022"),
        timesPurchased: 6,
        item: "Fonte",
        value: 619.99,
      },
      {
        boughtIn: new Date("08/16/2022"),
        timesPurchased: 10,
        item: "Monitor",
        value: 1280.59,
      },
      {
        boughtIn: new Date("08/07/2022"),
        timesPurchased: 10,
        item: "Amazon prime",
        value: 149.59,
      },
      {
        boughtIn: new Date("08/05/2022"),
        timesPurchased: 10,
        item: "Amazon prime",
        value: 149.59,
      },
    ],
  },
];
export default userCards;
