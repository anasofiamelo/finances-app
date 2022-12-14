import { Modal, ButtonWithIcon } from "../components";

const AddContainer = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <form style={{ width: "100%" }} onSubmit={props.onSubmitAddForm}>
        <h2 className="modal_title">{props.title}</h2>
        {props.children}
        <ButtonWithIcon style={{ float: "right" }} type="submit">
          {props.submitButtonText}
        </ButtonWithIcon>
      </form>
    </Modal>
  );
};

export default AddContainer;
