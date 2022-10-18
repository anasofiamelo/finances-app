import { Modal, Button } from "../components";

const AddContainer = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <form style={{ width: "100%" }} onSubmit={props.onSubmitAddForm}>
        <h2 className="subtitle">{props.title}</h2>
        {props.children}
        <Button style={{ float: "right" }} type="submit">
          Add purchase
        </Button>
      </form>
    </Modal>
  );
};

export default AddContainer;
