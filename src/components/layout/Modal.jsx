import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="modal_backdrop" onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className="modal_container">
      <div className="modal_content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
