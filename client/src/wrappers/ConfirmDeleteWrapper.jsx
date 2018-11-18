import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';


export default class ConfirmDeleteWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.onModalToggle = this.onModalToggle.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onModalToggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  onDeleteClick() {
    const { onDeleteClick } = this.props;
    onDeleteClick();
  }

  render() {
    const { modal } = this.state;
    const { children, buttonLabel } = this.props;
    return (
      <div className="modal-component">
        <Button color="danger" onClick={this.onModalToggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={this.onModalToggle}>
          <ModalHeader toggle={this.onModalToggle}>Confirm Delete</ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => { this.onModalToggle(); this.onDeleteClick(); }}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.onModalToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ConfirmDeleteWrapper.defaultProps = {
  buttonLabel: 'Delete',
};

ConfirmDeleteWrapper.propTypes = {
  children: PropTypes.object.isRequried,
  buttonLabel: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired,
};
