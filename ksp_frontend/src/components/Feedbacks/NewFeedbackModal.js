import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewForm from "../NewForm";

class NewFeedbackModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    if (create) {
      var title = "ADD NEW FEEDBACK";

      var button = (
         <Button
          onClick={this.toggle}
          style={{ minWidth: "200px", minHeight: "40px", color: "white", backgroundColor: "#3c52ad", position: "fixed"}}
        >
          <span> ADD FEEDBACK </span>
        </Button>
      );
    }

    return (
      <Fragment >
        <div className="button">
          {button}
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}><span>{title}</span></ModalHeader>

          <ModalBody>
            <NewForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              note={this.props.note}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewFeedbackModal;
