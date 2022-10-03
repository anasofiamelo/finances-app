import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const TransactionHeader = (props) => {
  return (
    <div className="balance-header">
      <h1>{props.title}</h1>
      <button
        style={{
          borderRadius: "1rem",
          background: "none",
          color: "var(--black)",
        }}
        onClick={props.onShowBalanceTable}
      >
        {props.showTable ? (
          <FiChevronUp style={{ fontSize: "2.5rem" }} />
        ) : (
          <FiChevronDown style={{ fontSize: "2.5rem" }} />
        )}
      </button>
    </div>
  );
};

export default TransactionHeader;
