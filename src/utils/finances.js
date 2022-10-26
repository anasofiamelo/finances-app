import moment from "moment";

const finances = [
  {
    type: "Salary",
    description: "Salário Outubro",
    date: moment("2022-10-01"),
    value: 3791.66,
    payment: "Cash",
  },
  {
    type: "Food",
    description: "Ifood Açaí",
    date: moment("2022-10-01"),
    value: -22.94,
    payment: "Cash",
  },
  {
    type: "Others",
    description: "Marinete",
    date: moment("2022-10-01"),
    value: 261.61,
    payment: "Cash",
  },
  {
    type: "Food",
    description: "Ifood Açaí",
    date: moment("2022-10-01"),
    value: -22.94,
    payment: "Cash",
  },
  {
    type: "Shop",
    description: "Riachuelo",
    date: moment("2022-10-01"),
    value: -22.94,
    payment: "Cash",
  },
  {
    type: "Others",
    description: "Marinete",
    date: moment("2022-10-01"),
    value: 258.24,
    payment: "Cash",
  },
  {
    type: "Supermarket",
    description: "Telefrango",
    date: moment("2022-10-01"),
    value: -258.24,
    payment: "Cash",
  },
  {
    type: "Maintenance",
    description: "Carro",
    date: moment("2022-10-08"),
    value: -258.24,
    payment: "Cash",
  },
  {
    type: "House",
    description: "Faxina",
    date: moment("2022-10-01"),
    value: -150,
    payment: "Cash",
  },
  {
    type: "Insurance",
    description: "Plano Marinete",
    date: moment("2022-10-01"),
    value: -150,
    payment: "Cash",
  },
  {
    type: "Benefit",
    description: "Caju",
    date: moment("2022-10-01"),
    value: 500,
    payment: "Cash",
  },
];

export default finances;
