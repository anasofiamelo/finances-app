const userCards = [
  {
    cardLimit: 200.0,
    cardClosureDate: 24,
    cardDueDate: 4,
    cardName: "Nubank",
    invoices: [
      {
        boughtIn: new Date("01/28/2022"),
        timesPurchased: 24,
        item: "Bag",
        value: 5000,
        paid: "",
      },
      {
        boughtIn: new Date("01/21/2022"),
        timesPurchased: 10,
        item: "PC",
        value: 1000,
      },
      {
        boughtIn: new Date("01/28/2022"),
        timesPurchased: 6,
        item: "Mega Hair",
        value: 800,
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
    cardClosureDate: 4,
    cardDueDay: 12,
    cardName: "Nubank Nicholas",
    invoices: [
      {
        boughtIn: new Date("07/01/2022"),
        timesPurchased: 3,
        item: "Escrivaninha",
        value: 215,
      },
      {
        boughtIn: new Date("07/01/2022"),
        timesPurchased: 3,
        item: "Liquidificador",
        value: 76.38,
      },
      {
        boughtIn: new Date("07/01/2022"),
        timesPurchased: 7,
        item: "Comoda",
        value: 398.65,
      },
      {
        boughtIn: new Date("08/01/2022"),
        timesPurchased: 8,
        item: "Oculos Sofia",
        value: 750,
      },
    ],
  },
];
export default userCards;
