import moment from "moment";

export const formatValue = (value) => {
  const isIncome = value > 0;
  const valueColor = isIncome ? "var(--green)" : "var(--red)";
  const valueSign = isIncome ? "+" : "-";
  const formattedValue = isIncome ? value : value * -1;
  return (
    <span
      className="activity-row_value-item"
      style={{
        color: valueColor,
      }}
    >
      {valueSign} $ {formattedValue.toFixed(2)}
    </span>
  );
};

export const formatMomentDate = (date) => {
  return date.format("DD/MM/YYYY");
};

export const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

// export default formatValue;
