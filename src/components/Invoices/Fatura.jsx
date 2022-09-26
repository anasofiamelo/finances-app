import { user, fatura, monthNames } from "../../utils";
const mappedFatura = fatura.map((purchase) => (
  <tr>
    <td>{purchase.item}</td>
    <td>${purchase.totalValue.toFixed(2)}</td>
    <td>{purchase.times}x</td>
    <td>{`${
      monthNames[purchase.start.getMonth()]
    }, ${purchase.start.getFullYear()}`}</td>
    <td>{`${monthNames[purchase.start.getMonth() + purchase.times]}`}</td>
  </tr>
));
const Fatura = (props) => {
  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Available limit ${user.limit}</h2>
      <table>
        <thead>
          <tr>
            <td>Purchased Item</td>
            <td>Value</td>
            <td>Parcels</td>
            <td>From</td>
            <td>To</td>
          </tr>
        </thead>
        <tbody>{mappedFatura}</tbody>
      </table>
    </div>
  );
};

export default Fatura;
