import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';


export default class DeleteConfirmWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.onModalToggle = this.onModalToggle.bind(this);
  }

  onModalToggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const { children, buttonLabel, message } = this.props;
    return (
      <div className="modal-component">
        <Button color="danger" onClick={this.onModalToggle}>{buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.onModalToggle}>
          <ModalHeader toggle={this.onModalToggle}>Confirm Delete</ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.onModalToggle}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.onModalToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

DeleteConfirmWrapper.defaultProps = {
  buttonLabel: 'Delete',
  message: 'Delete this item',
}

DeleteConfirmWrapper.propTypes = {
  buttonLabel: PropTypes.string,
  message: PropTypes.string,
}